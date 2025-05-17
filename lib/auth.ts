import { cookies } from "next/headers"
import { sql } from "@/lib/db"
import bcrypt from "bcryptjs"
import { v4 as uuidv4 } from "uuid"

// Types for authentication
export interface User {
  id: number
  username: string
  email: string
  created_at?: Date
}

export interface UserWithPassword extends User {
  password_hash: string
}

// Session expiry in seconds (7 days)
const SESSION_EXPIRY = 60 * 60 * 24 * 7

// Function to check if email exists
export async function emailExists(email: string): Promise<boolean> {
  try {
    // Vérifier d'abord si la table users existe
    const tableExists = await checkTableExists("users")
    if (!tableExists) {
      console.log("[AUTH] Users table does not exist yet")
      return false
    }

    const result = await sql`SELECT COUNT(*) as count FROM users WHERE email = ${email}`
    return result[0]?.count > 0
  } catch (error) {
    console.error("[AUTH] Error checking if email exists:", error)
    // Si une erreur se produit, supposons que l'email n'existe pas
    return false
  }
}

// Function to check if username exists
export async function usernameExists(username: string): Promise<boolean> {
  try {
    // Vérifier d'abord si la table users existe
    const tableExists = await checkTableExists("users")
    if (!tableExists) {
      console.log("[AUTH] Users table does not exist yet")
      return false
    }

    const result = await sql`SELECT COUNT(*) as count FROM users WHERE username = ${username}`
    return result[0]?.count > 0
  } catch (error) {
    console.error("[AUTH] Error checking if username exists:", error)
    // Si une erreur se produit, supposons que le nom d'utilisateur n'existe pas
    return false
  }
}

// Function to register a new user
export async function registerUser(username: string, email: string, password: string): Promise<User | null> {
  try {
    console.log("[AUTH] Starting registration:", { username, email })

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    console.log("[AUTH] Password hashed successfully")

    // Insert the new user with password_hash column
    const result = await sql`
      INSERT INTO users (username, email, password_hash)
      VALUES (${username}, ${email}, ${hashedPassword})
      RETURNING id, username, email, created_at
    `

    console.log("[AUTH] User registered successfully:", result[0])
    return result[0]
  } catch (error) {
    console.error("[AUTH] Error during registration:", error)
    throw error
  }
}

// Function to login a user
export async function loginUser(email: string, password: string): Promise<{ user: User; sessionId: string } | null> {
  try {
    console.log("[AUTH] Login attempt:", { email })

    // Get user by email, including password_hash
    const users = await sql`SELECT id, username, email, password_hash, created_at FROM users WHERE email = ${email}`
    if (users.length === 0) {
      console.log("[AUTH] Email not found:", email)
      throw new Error("Incorrect email or password")
    }

    const user = users[0] as UserWithPassword

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password_hash)
    if (!passwordMatch) {
      console.log("[AUTH] Incorrect password for:", email)
      throw new Error("Incorrect email or password")
    }

    // Create a session
    const sessionId = uuidv4()
    const expiresAt = new Date()
    expiresAt.setSeconds(expiresAt.getSeconds() + SESSION_EXPIRY)

    await sql`
      INSERT INTO sessions (id, user_id, expires_at)
      VALUES (${sessionId}, ${user.id}, ${expiresAt})
    `

    console.log("[AUTH] Login successful:", { id: user.id, username: user.username })

    // Return user without password_hash
    const { password_hash: _, ...userWithoutPassword } = user
    return { user: userWithoutPassword, sessionId }
  } catch (error) {
    console.error("[AUTH] Error during login:", error)
    throw error
  }
}

// Function to get the current user
export async function getCurrentUser(): Promise<User | null> {
  try {
    console.log("[AUTH] Getting current user")

    // Vérifier d'abord si les tables nécessaires existent
    const usersTableExists = await checkTableExists("users")
    const sessionsTableExists = await checkTableExists("sessions")

    if (!usersTableExists || !sessionsTableExists) {
      console.log("[AUTH] Required tables do not exist yet")
      return null
    }

    const cookieStore = cookies()
    const sessionId = cookieStore.get("sessionId")?.value

    if (!sessionId) {
      console.log("[AUTH] No sessionId found in cookies")
      return null
    }

    console.log("[AUTH] Session ID from cookie:", sessionId)

    // Get session and check if it's not expired
    const sessions = await sql`
      SELECT user_id FROM sessions
      WHERE id = ${sessionId} AND expires_at > NOW()
    `

    if (sessions.length === 0) {
      console.log("[AUTH] Invalid or expired session")
      return null
    }

    const userId = sessions[0].user_id
    console.log("[AUTH] User ID from session:", userId)

    // Get user
    const users = await sql`
      SELECT id, username, email, created_at
      FROM users WHERE id = ${userId}
    `

    if (users.length === 0) {
      console.log("[AUTH] User not found for ID", userId)
      return null
    }

    console.log("[AUTH] User retrieved:", users[0].username)
    return users[0]
  } catch (error) {
    console.error("[AUTH] Error retrieving user:", error)
    return null
  }
}

// Function to logout a user
export async function logoutUser(sessionId: string): Promise<boolean> {
  try {
    console.log("[AUTH] Logging out session:", sessionId)

    // Delete the session
    await sql`DELETE FROM sessions WHERE id = ${sessionId}`
    return true
  } catch (error) {
    console.error("[AUTH] Error during logout:", error)
    return false
  }
}

// Helper function to check if a table exists
async function checkTableExists(tableName: string): Promise<boolean> {
  try {
    const result = await sql`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public'
        AND table_name = ${tableName}
      ) as exists
    `
    return result[0]?.exists === true
  } catch (error) {
    console.error(`[AUTH] Error checking if table ${tableName} exists:`, error)
    return false
  }
}

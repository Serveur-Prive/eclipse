import { neon } from "@neondatabase/serverless"
import { drizzle } from "drizzle-orm/neon-http"

// Créer une connexion à la base de données
export const sql = neon(process.env.DATABASE_URL || "postgresql://postgres:postgres@localhost:5432/postgres")
export const db = drizzle(sql)

// Fonction pour initialiser la base de données
export async function initDatabase() {
  console.log("[DB] Initializing database...")

  try {
    // Vérifier si la table users existe
    const usersTableExists = await checkTableExists("users")

    if (!usersTableExists) {
      console.log("[DB] Creating users table...")
      await sql`
        CREATE TABLE IF NOT EXISTS users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(255) NOT NULL UNIQUE,
          email VARCHAR(255) NOT NULL UNIQUE,
          password_hash VARCHAR(255) NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `
      console.log("[DB] Users table created successfully")
    } else {
      console.log("[DB] Users table already exists")
    }

    // Vérifier si la table sessions existe
    const sessionsTableExists = await checkTableExists("sessions")

    if (!sessionsTableExists) {
      console.log("[DB] Creating sessions table...")
      await sql`
        CREATE TABLE IF NOT EXISTS sessions (
          id VARCHAR(255) PRIMARY KEY,
          user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
          expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        )
      `
      console.log("[DB] Sessions table created successfully")
    } else {
      console.log("[DB] Sessions table already exists")
    }

    console.log("[DB] Database initialization completed successfully")
    return true
  } catch (error) {
    console.error("[DB] Error initializing database:", error)
    throw error
  }
}

// Exporter également sous le nom initializeDatabase pour la compatibilité
export const initializeDatabase = initDatabase

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
    console.error(`[DB] Error checking if table ${tableName} exists:`, error)
    return false
  }
}

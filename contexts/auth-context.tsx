"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

interface User {
  id: number
  username: string
  email: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  register: (username: string, email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Check if user is logged in on initial load
  useEffect(() => {
    async function loadUserFromSession() {
      try {
        console.log("Fetching user session...")

        // Initialiser la base de données avant de vérifier la session
        try {
          const initRes = await fetch("/api/init-db")
          if (!initRes.ok) {
            console.warn("Database initialization warning:", await initRes.text())
            // Continuons même si l'initialisation n'est pas parfaite
          } else {
            console.log("Database initialized successfully")
          }
        } catch (initError) {
          console.warn("Database initialization error:", initError)
          // Continuons même si l'initialisation échoue
        }

        const res = await fetch("/api/auth/me")

        // Vérifier si la réponse est OK avant de parser le JSON
        if (!res.ok) {
          console.error(`Error response: ${res.status} ${res.statusText}`)
          const text = await res.text()
          console.error("Response body:", text)
          // Ne pas lever d'erreur, simplement logger et continuer
          console.log("Continuing without user session")
          return
        }

        const data = await res.json()
        console.log("User session data:", data)

        if (data.success && data.user) {
          setUser(data.user)
        }
      } catch (err) {
        console.error("Error loading user session:", err)
        // Ne pas définir d'erreur dans l'interface utilisateur pour les erreurs de session initiales
      } finally {
        setLoading(false)
      }
    }

    loadUserFromSession()
  }, [])

  // Register a new user
  async function register(username: string, email: string, password: string) {
    setLoading(true)
    setError(null)

    try {
      // Initialiser la base de données avant l'inscription
      try {
        await fetch("/api/init-db")
        console.log("Database initialized before registration")
      } catch (initError) {
        console.warn("Database initialization warning:", initError)
        // Continuons même si l'initialisation n'est pas parfaite
      }

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      })

      // Vérifier si la réponse est OK avant de parser le JSON
      if (!res.ok) {
        const text = await res.text()
        throw new Error(`Registration failed: ${text.substring(0, 100)}`)
      }

      const data = await res.json()

      if (!data.success) {
        throw new Error(data.error || "Registration failed")
      }

      // Instead of automatically logging in, redirect to login page
      router.push("/login?registered=true")
    } catch (err) {
      console.error("Registration error:", err)
      setError(err instanceof Error ? err.message : "An error occurred during registration")
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Login a user
  async function login(email: string, password: string) {
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      // Vérifier si la réponse est OK avant de parser le JSON
      if (!res.ok) {
        const text = await res.text()
        throw new Error(`Login failed: ${text.substring(0, 100)}`)
      }

      const data = await res.json()

      if (!data.success) {
        throw new Error(data.error || "Login failed")
      }

      setUser(data.user)
      router.push("/profile")
    } catch (err) {
      console.error("Login error:", err)
      setError(err instanceof Error ? err.message : "An error occurred during login")
      throw err
    } finally {
      setLoading(false)
    }
  }

  // Logout a user
  async function logout() {
    setLoading(true)

    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      })

      // Vérifier si la réponse est OK avant de parser le JSON
      if (!res.ok) {
        const text = await res.text()
        throw new Error(`Logout failed: ${text.substring(0, 100)}`)
      }

      const data = await res.json()

      if (!data.success) {
        throw new Error(data.error || "Logout failed")
      }

      setUser(null)
      router.push("/")
    } catch (err) {
      console.error("Logout error:", err)
      setError(err instanceof Error ? err.message : "An error occurred during logout")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthContext.Provider value={{ user, loading, error, register, login, logout }}>{children}</AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

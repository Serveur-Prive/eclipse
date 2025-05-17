"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { AlertCircle, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import Image from "next/image"

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  // Toujours considérer l'email comme disponible
  const [isEmailAvailable, setIsEmailAvailable] = useState(true)
  const [isCheckingEmail, setIsCheckingEmail] = useState(false)
  const router = useRouter()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Désactivons la vérification d'email
    if (name === "email") {
      // Toujours considérer l'email comme disponible
      setIsEmailAvailable(true)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.")
      return
    }

    if (formData.password.length < 8) {
      setError("Le mot de passe doit contenir au moins 8 caractères.")
      return
    }

    setIsLoading(true)

    try {
      // Initialiser la base de données avant l'inscription
      try {
        await fetch("/api/init-db")
        console.log("Base de données initialisée avec succès")
      } catch (initError) {
        console.error("Erreur lors de l'initialisation de la base de données:", initError)
        // Continuer quand même, car la base de données pourrait déjà être initialisée
      }

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        console.error("Erreur d'inscription:", data)
        throw new Error(data.error || "Erreur lors de l'inscription")
      }

      console.log("Inscription réussie:", data)
      // Redirection vers la page de connexion après inscription réussie
      router.push("/login?registered=true")
    } catch (err) {
      console.error("Erreur d'inscription:", err)
      setError(err.message || "Une erreur est survenue lors de l'inscription.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen bg-black">
      <div className="relative hidden w-1/2 lg:block">
        <div className="absolute inset-0 bg-black">
          <Image src="/dofus-header-bg.png" alt="Dofus Background" fill className="object-cover opacity-70" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        <div className="relative z-10 flex h-full flex-col justify-center px-12">
          {/* Logo supprimé */}
          <h1 className="text-4xl font-bold text-white">
            DOFUS{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">ERAZIEL</span>
          </h1>
          <p className="mt-4 text-xl text-white/80">
            Créez votre compte pour rejoindre l'aventure et découvrir un monde de possibilités sur Dofus Eraziel.
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-red-500"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <p className="text-white/80">Créez votre personnage unique</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-red-500"
                >
                  <path d="M12 20h9" />
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                </svg>
              </div>
              <p className="text-white/80">Explorez des donjons exclusifs</p>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-900/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-red-500"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <p className="text-white/80">Rejoignez une communauté active</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center px-4 sm:px-6 lg:w-1/2 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-8 text-center lg:hidden">
            {/* Logo supprimé */}
            <h1 className="mt-4 text-3xl font-bold text-white">
              DOFUS{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">ERAZIEL</span>
            </h1>
          </div>
          <Card className="border-red-800/30 bg-black/60 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-white">Créer un compte</CardTitle>
              <CardDescription className="text-white/60">
                Rejoignez l'aventure Dofus Eraziel dès maintenant
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <Alert variant="destructive" className="mb-4 bg-red-900/20 border-red-800">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username" className="text-white">
                    Nom d'utilisateur
                  </Label>
                  <Input
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    className="border-red-800/30 bg-black/60 text-white placeholder:text-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-red-800/30 bg-black/60 text-white placeholder:text-white/40"
                    />
                    {/* Suppression de l'affichage du message d'erreur pour l'email */}
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white">
                    Mot de passe
                  </Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="border-red-800/30 bg-black/60 text-white placeholder:text-white/40"
                  />
                  {formData.password && formData.password.length < 8 && (
                    <div className="mt-1 text-xs text-amber-500">
                      Le mot de passe doit contenir au moins 8 caractères.
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white">
                    Confirmer le mot de passe
                  </Label>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className={`border-red-800/30 bg-black/60 text-white placeholder:text-white/40 ${
                      formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                  {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                    <div className="mt-1 text-xs text-red-500">Les mots de passe ne correspondent pas.</div>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm text-white/70">
                    J'accepte les{" "}
                    <Link href="#" className="text-red-400 hover:text-red-300 hover:underline">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link href="#" className="text-red-400 hover:text-red-300 hover:underline">
                      politique de confidentialité
                    </Link>
                  </Label>
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Création en cours...
                    </>
                  ) : (
                    "Créer un compte"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="text-center text-sm text-white/60">
                Déjà un compte?{" "}
                <Link href="/login" className="text-red-400 hover:text-red-300 hover:underline">
                  Se connecter
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

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
import Image from "next/image"
import { useAuth } from "@/contexts/auth-context"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      await login(email, password)
      router.push("/profile")
    } catch (err) {
      console.error("Erreur de connexion:", err)
      setError("Échec de la connexion. Veuillez vérifier vos identifiants.")
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
            Connectez-vous pour accéder à votre compte et profiter pleinement de l'expérience Dofus Eraziel.
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
              <p className="text-white/80">Accédez à votre profil personnalisé</p>
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
              <p className="text-white/80">Participez aux événements exclusifs</p>
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
              <p className="text-white/80">Suivez votre progression et vos classements</p>
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
              <CardTitle className="text-xl text-white">Connexion</CardTitle>
              <CardDescription className="text-white/60">
                Entrez vos identifiants pour accéder à votre compte
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
                  <Label htmlFor="email" className="text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="votre@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border-red-800/30 bg-black/60 text-white placeholder:text-white/40"
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-white">
                      Mot de passe
                    </Label>
                    <Link
                      href="/mot-de-passe-oublie"
                      className="text-sm text-red-400 hover:text-red-300 hover:underline"
                    >
                      Mot de passe oublié?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border-red-800/30 bg-black/60 text-white placeholder:text-white/40"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white border-0"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Connexion en cours...
                    </>
                  ) : (
                    "Se connecter"
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm text-white/60">
                Pas encore de compte?{" "}
                <Link href="/register" className="text-red-400 hover:text-red-300 hover:underline">
                  S'inscrire
                </Link>
              </div>
              <div className="text-center text-xs text-white/40">
                En vous connectant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ArrowLeft } from "lucide-react"

export default function MotDePasseOublie() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // For demo purposes, always show an error
      setError("Fonctionnalité désactivée dans cette démo.")
      setIsLoading(false)
    } catch (err: any) {
      console.error("Erreur lors de la réinitialisation du mot de passe:", err)
      setError("Une erreur est survenue lors de la demande de réinitialisation du mot de passe.")
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black bg-[url('/particle-bg.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link
          href="/login"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-6 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la connexion
        </Link>

        <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-cyan-900/50 shadow-xl">
          <h1 className="text-2xl font-bold text-white mb-6">Mot de passe oublié</h1>

          {!success ? (
            <>
              <p className="text-gray-300 mb-6">
                Entrez votre adresse e-mail ci-dessous et nous vous enverrons un lien pour réinitialiser votre mot de
                passe.
              </p>

              {error && (
                <Alert variant="destructive" className="mb-4 bg-red-900/50 border-red-800 text-white">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
                    Adresse e-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="votre@email.com"
                    required
                    className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-500 hover:to-blue-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Envoi en cours..." : "Envoyer le lien de réinitialisation"}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-900/30 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">E-mail envoyé</h2>
              <p className="text-gray-300 mb-6">
                Si un compte existe avec cette adresse e-mail, vous recevrez un lien pour réinitialiser votre mot de
                passe. Vérifiez votre boîte de réception et vos spams.
              </p>
              <Button
                onClick={() => router.push("/login")}
                variant="outline"
                className="border-cyan-800/50 text-cyan-400 hover:bg-cyan-900/20"
              >
                Retour à la connexion
              </Button>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400">
            Vous n&apos;avez pas de compte ?{" "}
            <Link href="/register" className="text-cyan-400 hover:text-cyan-300">
              Inscrivez-vous
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

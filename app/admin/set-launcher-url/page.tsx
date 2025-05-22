"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Check, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Input } from "@/components/ui/input"

export default function SetLauncherUrlPage() {
  const [url, setUrl] = useState("")
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return

    setSaving(true)
    setStatus({})

    try {
      const response = await fetch("/api/set-launcher-url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      })

      const result = await response.json()

      if (response.ok) {
        setStatus({
          success: true,
          message: result.message || "URL du launcher enregistrée avec succès!",
        })
      } else {
        setStatus({
          success: false,
          message: result.error || "Erreur lors de l'enregistrement de l'URL",
        })
      }
    } catch (error) {
      console.error("Erreur:", error)
      setStatus({
        success: false,
        message: "Erreur de connexion au serveur",
      })
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-black relative">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-primary/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="inline-flex items-center text-white/70 hover:text-white mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à l'accueil
          </Link>

          <Card className="bg-black/60 backdrop-blur-sm border-primary/30">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Définir l'URL du Launcher</CardTitle>
              <CardDescription className="text-white/70">
                Si vous avez déjà uploadé votre launcher sur un autre service, vous pouvez définir son URL ici
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="launcher-url" className="text-sm font-medium text-white/90">
                    URL du Launcher (.zip)
                  </label>
                  <Input
                    id="launcher-url"
                    type="url"
                    placeholder="https://exemple.com/launcher.zip"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="bg-black/50 border-primary/30 text-white"
                    required
                  />
                  <p className="text-white/60 text-sm">Entrez l'URL complète de votre fichier launcher.zip</p>
                </div>

                {status.message && (
                  <Alert
                    className={`${
                      status.success ? "bg-green-500/20 border-green-500/50" : "bg-red-500/20 border-red-500/50"
                    }`}
                  >
                    {status.success ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                    <AlertTitle className={status.success ? "text-green-500" : "text-red-500"}>
                      {status.success ? "Succès" : "Erreur"}
                    </AlertTitle>
                    <AlertDescription className="text-white/80">{status.message}</AlertDescription>
                  </Alert>
                )}
              </form>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={!url || saving}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                {saving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enregistrement...
                  </>
                ) : (
                  "Enregistrer l'URL"
                )}
              </Button>
            </CardFooter>
          </Card>

          {status.success && (
            <div className="mt-6 text-center">
              <Link href="/telecharger">
                <Button variant="outline" className="border-primary/50 text-white">
                  Voir la page de téléchargement
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

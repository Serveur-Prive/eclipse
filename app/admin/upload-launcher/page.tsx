"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload, Check, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function UploadLauncherPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<{
    success?: boolean
    message?: string
    url?: string
  }>({})

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) return

    setUploading(true)
    setUploadStatus({})

    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("/api/upload-launcher", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        setUploadStatus({
          success: true,
          message: result.message || "Launcher uploadé avec succès!",
          url: result.url,
        })
      } else {
        setUploadStatus({
          success: false,
          message: result.error || "Erreur lors de l'upload",
        })
      }
    } catch (error) {
      console.error("Erreur:", error)
      setUploadStatus({
        success: false,
        message: "Erreur de connexion au serveur",
      })
    } finally {
      setUploading(false)
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
              <CardTitle className="text-2xl text-white">Upload du Launcher</CardTitle>
              <CardDescription className="text-white/70">
                Uploadez le fichier launcher.zip qui sera disponible au téléchargement sur le site
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="launcher-file" className="text-sm font-medium text-white/90">
                    Fichier Launcher (.zip)
                  </label>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center">
                    {file ? (
                      <div className="space-y-2">
                        <div className="flex items-center justify-center">
                          <Check className="h-8 w-8 text-green-500" />
                        </div>
                        <p className="text-white font-medium">{file.name}</p>
                        <p className="text-white/60 text-sm">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                        <Button
                          type="button"
                          variant="outline"
                          className="mt-2 border-primary/50 text-white"
                          onClick={() => setFile(null)}
                        >
                          Changer de fichier
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-center">
                          <Upload className="h-10 w-10 text-primary/60" />
                        </div>
                        <p className="text-white/80">Glissez-déposez votre fichier launcher.zip ici ou</p>
                        <Button
                          type="button"
                          variant="outline"
                          className="border-primary/50 text-white"
                          onClick={() => document.getElementById("launcher-file")?.click()}
                        >
                          Parcourir les fichiers
                        </Button>
                        <input
                          id="launcher-file"
                          type="file"
                          accept=".zip"
                          className="hidden"
                          onChange={handleFileChange}
                        />
                      </div>
                    )}
                  </div>
                </div>

                {uploadStatus.message && (
                  <Alert
                    className={`${
                      uploadStatus.success ? "bg-green-500/20 border-green-500/50" : "bg-red-500/20 border-red-500/50"
                    }`}
                  >
                    {uploadStatus.success ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-red-500" />
                    )}
                    <AlertTitle className={uploadStatus.success ? "text-green-500" : "text-red-500"}>
                      {uploadStatus.success ? "Succès" : "Erreur"}
                    </AlertTitle>
                    <AlertDescription className="text-white/80">{uploadStatus.message}</AlertDescription>
                  </Alert>
                )}

                {uploadStatus.success && uploadStatus.url && (
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                    <p className="text-white font-medium mb-2">URL du launcher:</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={uploadStatus.url}
                        readOnly
                        className="flex-1 bg-black/50 border border-primary/30 rounded p-2 text-white/90 text-sm"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="border-primary/50 text-white"
                        onClick={() => {
                          navigator.clipboard.writeText(uploadStatus.url || "")
                          alert("URL copiée dans le presse-papier!")
                        }}
                      >
                        Copier
                      </Button>
                    </div>
                    <p className="text-white/60 text-sm mt-2">
                      Cette URL est maintenant liée aux boutons de téléchargement du launcher sur le site.
                    </p>
                  </div>
                )}
              </form>
            </CardContent>
            <CardFooter>
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={!file || uploading}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              >
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Upload en cours...
                  </>
                ) : (
                  "Uploader le Launcher"
                )}
              </Button>
            </CardFooter>
          </Card>

          {uploadStatus.success && (
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

import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="container relative h-[80vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="text-foreground/70">Chargement de la page...</p>
      </div>
    </div>
  )
}

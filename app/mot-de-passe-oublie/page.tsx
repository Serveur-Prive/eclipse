"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useTranslations } from "next-intl"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()
  const t = useTranslations("ForgotPasswordPage")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    setMessage("")

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(t("successMessage"))
      } else {
        setError(data.message || t("errorMessage"))
      }
    } catch (err) {
      setError(t("errorMessage"))
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">{t("title")}</h2>

        {message && <div className="bg-green-200 text-green-800 p-3 rounded mb-4">{message}</div>}

        {error && <div className="bg-red-200 text-red-800 p-3 rounded mb-4">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              {t("emailLabel")}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder={t("emailPlaceholder")}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              {t("resetPasswordButton")}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

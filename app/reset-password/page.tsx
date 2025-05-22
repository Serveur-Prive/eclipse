"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

const formSchema = z
  .object({
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
    passwordConfirmation: z.string().min(8, {
      message: "Password must be at least 8 characters.",
    }),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"], // path of error
  })

const ResetPasswordPage = () => {
  const [tokenValid, setTokenValid] = useState(false)
  const searchParams = useSearchParams()
  const token = searchParams.get("token")
  const router = useRouter()

  useEffect(() => {
    const verifyToken = async () => {
      if (!token) {
        setTokenValid(false)
        return
      }

      try {
        const response = await fetch("/api/auth/verify-reset-password-token", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        })

        if (response.ok) {
          setTokenValid(true)
        } else {
          setTokenValid(false)
        }
      } catch (error) {
        console.error("Error verifying token:", error)
        setTokenValid(false)
      }
    }

    verifyToken()
  }, [token])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      passwordConfirmation: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password: values.password }),
      })

      if (response.ok) {
        toast.success("Password reset successfully.")
        router.push("/sign-in")
      } else {
        toast.error("Failed to reset password.")
      }
    } catch (error) {
      console.error("Error resetting password:", error)
      toast.error("An error occurred while resetting password.")
    }
  }

  if (!token) {
    return <div className="container relative h-[80vh] flex items-center justify-center">Invalid or missing token.</div>
  }

  if (!tokenValid) {
    return <div className="container relative h-[80vh] flex items-center justify-center">Invalid or expired token.</div>
  }

  return (
    <div className="container relative h-[80vh] flex items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Reset your password</h1>
          <p className="text-sm text-muted-foreground">Enter your new password below</p>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter your new password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Confirm your new password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Reset password
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default ResetPasswordPage

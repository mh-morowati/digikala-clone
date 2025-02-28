"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useSessionQuery } from "@/lib/hooks/useSession"
import { Button, Modal, useDisclosure } from "@heroui/react"

export default function LoginPage() {
    
    const {isOpen, onOpen, onOpenChange} = useDisclosure()
  const { data: session } = useSessionQuery()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  if (session?.user) {
    router.push("/dashboard")
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Check if the user exists in localStorage
    const users = JSON.parse(localStorage.getItem("users") || "[]")
    const userExists = users.some((user: { email: string; password: string }) => user.email === email)

    if (!userExists) {
      setError("User not found. Please sign up first.")
      return
    }

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (res?.error) {
      setError("Invalid credentials")
    } else {
      router.push("/dashboard")
    }
  }

    return (
        <>
          <Button onPress={onOpen}>Login</Button>
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
            </Modal>
        </>
  )
}

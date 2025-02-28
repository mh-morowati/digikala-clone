"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignupPage() {
    
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleSignup = () => {
    const users = JSON.parse(localStorage.getItem("users") || "[]")

    // Check if the user already exists
    if (users.some((user: { email: string }) => user.email === email)) {
      setMessage("User already exists")
      return
    }

    // Create new user
    const newUser = { id: Date.now(), email, password }
    users.push(newUser)
    localStorage.setItem("users", JSON.stringify(users))

    setMessage("Signup successful! Redirecting to login...")
    setTimeout(() => router.push("/login"), 1500)
  }

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button onClick={handleSignup}>Sign Up</button>
      <p>{message}</p>
    </div>
  )
}

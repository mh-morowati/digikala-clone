"use client"

import { useSessionQuery } from "@/lib/hooks/useSession"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
  const { data: session, isLoading } = useSessionQuery()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && !session?.user) {
      router.push("/login")
    }
  }, [session, isLoading])

  if (isLoading) return <p>Loading...</p>
  if (!session?.user) return null

  return (
    <div>
      <h2>Welcome, {session.user.email}</h2>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  )
}

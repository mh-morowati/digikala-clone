import { useQuery } from "@tanstack/react-query"

const fetchSession = async () => {
  const res = await fetch("/api/auth/session")
  if (!res.ok) throw new Error("Failed to fetch session")
  return res.json()
}

export const useSessionQuery = () => {
  return useQuery({
    queryKey: ["session"],
    queryFn: fetchSession,
    staleTime: 5 * 60 * 1000,
    retry: false,
  })
}

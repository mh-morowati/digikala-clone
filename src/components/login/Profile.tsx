"use client"
import { useAuth } from "@/lib/hooks/useAuth"
import { useQuery } from "@tanstack/react-query"
import { redirect } from "next/navigation"

const useSession = () => useQuery({
  queryKey: ["session"],
    queryFn: () => null, 
  staleTime: Infinity
})

const Profile = () => {

    const { data: user } = useSession()
    const { logoutMutation } = useAuth()
  
  if (!user) return redirect('/login')

  return (
    <div className="place-items-center">
      <div className="w-80 md:w-[500px] border place-items-center mt-8 rounded space-y-6">
        
              <p>Welcome! Your phone: {user.phone}</p>
              <h1>mock profile</h1>
              <h1>Orders</h1>
              <h1>my list</h1>
              <h1>questions</h1>
              <h1>address</h1>
              <h1>Gifts</h1>
              <h1>messages</h1>
              <button
                  onClick={() => logoutMutation.mutate()}
                  className="bg-red-500 text-white py-2 px-4 mt-2 rounded"
              >
                  Logout
               </button>
        
          </div>
    </div>
  )
}

export default Profile
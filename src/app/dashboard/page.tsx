"use client";
import { useAuth } from "@/lib/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const useSession = () => useQuery({
  queryKey: ["session"],
  queryFn: () => null, // No fetch function needed for client state
  staleTime: Infinity
});

const Profile = () => {
  const { data: user } = useSession();
  const { logoutMutation } = useAuth();

  if (!user) return <p>Please log in.</p>;

  return (
    <div>
      <p>Welcome! Your phone: {user.phone}</p>
      <button
        onClick={() => logoutMutation.mutate()}
        className="bg-red-500 text-white p-2 mt-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;

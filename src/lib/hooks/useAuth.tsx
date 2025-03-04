"use client"
import { addToast } from "@heroui/react"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { useState } from "react"

const generateRandomCode = () => Math.floor(1000 + Math.random() * 9000).toString()

export const useAuth = () => {

  const queryClient = useQueryClient()
  const [verificationCode, setVerificationCode] = useState<string | null>(null)
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null)
  
  const sendCodeMutation = useMutation({

    mutationFn: async (phone: string) => {

        setPhoneNumber(phone)
      const code = generateRandomCode()
      setVerificationCode(code)
      addToast({
        title: "Verification code",
        description: code, 
        color: "success",
      })

      return code
    },
  })

  const verifyCodeMutation = useMutation({
    
    mutationFn: async (code: string) => {
       if (code !== verificationCode) {
      addToast({
        description: "Invalid code. Try again.",
        color: "danger",
      });
         return
    }
        const user = { phone: phoneNumber, isAuthenticated: true }
        queryClient.setQueryData(["session"], user)
        return user
      
    },
  })

  // ✅ Logout mutation: Clears session
  const logoutMutation = useMutation({
    mutationFn: async () => {
        queryClient.setQueryData(["session"], null)
    },
  })

  return { sendCodeMutation, verifyCodeMutation, logoutMutation }
}

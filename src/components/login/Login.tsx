"use client"
import { useAuth } from "@/lib/hooks/useAuth"
import { addToast, Input } from "@heroui/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


const Login = () => {

  const { sendCodeMutation, verifyCodeMutation } = useAuth()
  const [phone, setPhone] = useState("121234567")
  const [code, setCode] = useState("")
  const [step, setStep] = useState(1)
  const [message, setMessage] = useState('')
  
  const router = useRouter()
  const phonePattern = /^[0-9]{9}$/
  
  const handleSendCode = async () => {
    
    if (!phone || !phonePattern.test(phone)) {
      setMessage("Please enter a valid phone number.")
    } else {
      await sendCodeMutation.mutateAsync(phone)
      setStep(2)
    }
  }

  const handleVerifyCode = async () => {
    try {
      await verifyCodeMutation.mutateAsync(code)
      addToast({
              description: "Login successful!",
              color: "success",
      })

      router.push('/dashboard')
      
    } catch (error) {
      setMessage("Invalid code, try again.")
    }
  }

  return (
    <div
      className=
      "p-4 border rounded w-80 sm:w-96 min-[1900px]:w-[500px] h-96 place-self-center mt-4 place-content-center space-y-7"
    >

      <Link href={"/"} className="text-center">
        <p className="font-bold text-red-500 text-2xl font-mono">DigiKala</p>
      </Link>

      {(step === 1 || !phonePattern.test(phone)) && <>
        <h2 className="text-sm font-sans text-zinc-700">
          Hi ! <br />Please enter your phone number
        </h2>

        <Input
          startContent={"09"}
          isRequired
          isClearable
          size="lg"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone"
          pattern="^[0-9]{9}$"
        />
        <h1 className="text-red-600">
        {message}
        </h1>
        
        <button
          onClick={handleSendCode}
          className="bg-blue-600 text-white p-2 w-full mt-2 rounded"
        >
          Login
        </button>
      </>
      }
      
      {(step === 2 && phonePattern.test(phone)) && <>
          <h2 className="text-sm font-sans text-zinc-700">Enter Verification Code</h2>
          <Input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter code"
        />
        <h1>
        {message}
         </h1>
          <button
            onClick={handleVerifyCode}
            className="bg-green-500 text-white p-2 w-full mt-2"
          >
            Verify & Login
        </button>
        <button
            onClick={() => setStep(1)}
            className="bg-zinc-400 text-white p-2 w-full mt-2"
          >
            Previous
        </button>
        </>
      }

    </div>
  )
}

export default Login

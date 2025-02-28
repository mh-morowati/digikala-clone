"use client"
import { HeroUIProvider } from '@heroui/react'
import {ToastProvider} from "@heroui/toast"

export default function Providers({ children }:unknown) {
  
  return (
    <HeroUIProvider>
      <ToastProvider placement='top-center' />
      {children}
    </HeroUIProvider>
  )
}
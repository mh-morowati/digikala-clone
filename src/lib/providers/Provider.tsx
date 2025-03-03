"use client"
import { HeroUIProvider } from '@heroui/react'
import {ToastProvider} from "@heroui/toast"
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }:ProvidersProps) {
  
  return (
    <HeroUIProvider>
      <ToastProvider placement='top-center' />
      {children}
    </HeroUIProvider>
  )
}
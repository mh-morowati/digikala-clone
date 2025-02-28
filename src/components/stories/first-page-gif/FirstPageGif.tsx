'use client'
import { useEffect, useState } from "react"
import Image from 'next/image'

const images = [
  {src:'/gif1.webp'},
  {src:'/gif2.webp'},
  {src:'/gif3.gif'},
]

const FirstPageGifs: React.FC = () =>{

  const [currentImageIndex,setCurrentImageIndex] = useState(0)

  useEffect(() =>{

    const interval = setInterval(() =>{
      setCurrentImageIndex((prevIndex)=> (prevIndex + 1) % images.length)
    },3000)
    return () => clearInterval(interval)
    
  },[])

  return(
  <div className="relative w-full h-[360px] hidden md:block">
    <Image 
      src={images[currentImageIndex].src}
        alt="GIF banner"
        fill 
        className="object-cover"
    />
    </div>
  )
}

export default FirstPageGifs
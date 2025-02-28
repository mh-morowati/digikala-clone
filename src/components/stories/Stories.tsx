"use client"
import { useEffect, useState } from "react"
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "@heroui/modal"
import { Button } from "@heroui/button"
import Image from "next/image"


const Stories = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [imageUrls, setImageUrls] = useState<string[]>([])
  const videoSrc = "/s24.mp4"

  useEffect(() => {
  
    const urls = [...Array(10)].map((_, index) => 
      `https://picsum.photos/seed/${index}/200/300`
    )
    setImageUrls(urls)

  }, [])

  return (
    <div className="flex gap-4 overflow-x-scroll lg:overflow-x-auto p-5">
      {imageUrls.map((url, index) => (
        <div key={index}>
          
          <Button
            className="w-20 h-20 relative"
            isIconOnly
            aria-label={`Open Video ${index + 1}`}
            variant="bordered"
            color="secondary"
            radius="full"
            size="lg"
            onClick={() => setActiveIndex(index)}
          >
            {url && (
              <Image
               src={url}
               alt={`Story ${index + 1}`}
               fill 
              className="rounded-full object-cover"
               />
            )}
          </Button>
          
          <Modal
           isOpen={activeIndex === index} 
           onClose={() => setActiveIndex(null)}
           placement="center"
          >
            
            <ModalContent>

              <ModalHeader>Video {index + 1}</ModalHeader>

              <ModalBody>
                <video autoPlay className="w-full">
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" onClick={() => setActiveIndex(null)}>
                  Close
                </Button>
              </ModalFooter>

            </ModalContent>
          </Modal>
        </div>
      ))}
    </div>
  )
}

export default Stories

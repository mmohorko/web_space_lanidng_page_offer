"use client"

import { useState } from "react"
import Image from "next/image"

interface FallbackImageProps {
  src: string
  fallbackSrc: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export default function FallbackImage({
  src,
  fallbackSrc,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  return (
    <Image
      src={imgSrc || fallbackSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? "eager" : "lazy"}
      priority={priority}
      onError={() => {
        if (!hasError) {
          setImgSrc(fallbackSrc)
          setHasError(true)
        }
      }}
    />
  )
}

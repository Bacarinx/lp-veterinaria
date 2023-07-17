'use client'

import Image from 'next/image'
import { useState } from 'react'

interface AnimatedIconProps {
  estatico: any
  dinamico: any
  alt: string
  prop: number
}

export function AnimatedIcon({
  estatico,
  dinamico,
  alt,
  prop,
}: AnimatedIconProps) {
  const [active, setActive] = useState<boolean>(false)

  return (
    <div>
      <Image
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        src={active ? dinamico : estatico}
        alt={alt}
        width={prop}
        height={prop}
        priority
      />
    </div>
  )
}

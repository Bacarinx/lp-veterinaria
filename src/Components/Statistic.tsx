'use client'

import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import useObserver from '@/hooks/useObserver'

interface statiscProps {
  startValue: number
  finalValue: number
  image: StaticImageData
  body1?: string
  body2?: string
}

export default function Statistic({
  startValue,
  finalValue,
  image,
  body1,
  body2,
}: statiscProps) {
  const { inIntersecting, ref } = useObserver()

  const [value, setValue] = useState<number>(startValue)
  const quantity = 2400 / 100
  const sum = finalValue / quantity
  const porcent = 100 / (finalValue - startValue)

  useEffect(() => {
    if (inIntersecting) {
      const intervalo = setInterval(() => {
        if (value < finalValue) {
          setValue(value + sum)
        }
      }, 100)
      return () => clearInterval(intervalo)
    }
  }, [value, finalValue, sum, inIntersecting])

  return (
    <div className="flex flex-col justify-start items-center" ref={ref}>
      <div
        className="circular-progress"
        style={{
          background: `conic-gradient(cyan ${
            value * porcent * 3.6
          }deg, #ededed 0deg)`,
        }}
      >
        <div className="progress-value">
          <Image
            className="m-auto"
            src={image}
            alt="information"
            width={0}
            height={0}
            style={{
              width: '40%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div className="text-center pt-2">
        <p>{body1}</p>
        <p className="text-2xl text-center m-auto">+{Math.floor(value)}</p>
        <p>{body2}</p>
      </div>
    </div>
  )
}

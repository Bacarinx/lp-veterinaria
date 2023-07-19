'use client'

import Image from 'next/image'
import { ExpBtn } from './Buttons'
import { useEffect, useState } from 'react'
import useObserver from '@/hooks/useObserver'

interface CardProps {
  image: any
  title: string
  body: string
  body2?: string
  Primary: boolean
}

export default function CardInfo(props: CardProps) {
  const { inIntersecting, ref, setInIntersecting } = useObserver()
  const [valor, setValor] = useState<boolean>(false)

  useEffect(() => {
    if (inIntersecting) {
      setValor(true)
    }
  }, [inIntersecting, setInIntersecting])

  return (
    <div
      className={`${
        props.Primary ? 'container' : 'container2'
      } md:w-[80%] m-auto mb-8 md:mb-24`}
      ref={ref}
    >
      <h1
        className={`card-title md:text-5xl text-3xl font-black text-center md:text-start  pt-6 pb-4 mb-2 md:mb-4 ${
          valor
            ? 'nothing duration-[1000ms]'
            : props.Primary
            ? 'cardL'
            : 'cardR'
        }`}
      >
        {props.title}
      </h1>
      <Image
        className={`card-img m-auto ${
          valor
            ? 'nothing duration-[1000ms]'
            : props.Primary
            ? 'cardR'
            : 'cardL'
        }`}
        src={props.image}
        alt=""
        width={0}
        height={0}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div
        className={`md:text-start ${
          valor
            ? 'nothing duration-[1000ms]'
            : props.Primary
            ? 'cardL'
            : 'cardR'
        }`}
      >
        <p className="card-p1 text-center md:text-start text-[18px] pb-2">
          {props.body}
        </p>
        {props.body2 && (
          <p className="card-p2 text-center md:text-start text-[18px] pb-2">
            {props.body2}
          </p>
        )}
        <div
          className={`card-btn flex justify-center items-center md:justify-start pt-4 md:m-0 ${
            valor
              ? 'nothing duration-[1000ms]'
              : props.Primary
              ? 'cardL'
              : 'cardR'
          } `}
        >
          <ExpBtn />
        </div>
      </div>
    </div>
  )
}

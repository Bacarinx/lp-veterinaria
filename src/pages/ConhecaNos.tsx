'use client'

import Image from 'next/image'
import conhecaImage from '../../public/assets/Conheca.jpg'
import { ExpBtn } from '@/Components/Buttons'
import useObserver from '@/hooks/useObserver'
import { useEffect, useState } from 'react'

export default function ConhecaNos() {
  const { inIntersecting, ref, setInIntersecting } = useObserver()
  const [valor, setValor] = useState<boolean>(false)

  useEffect(() => {
    if (inIntersecting) {
      setValor(true)
    }
  }, [inIntersecting, setInIntersecting])

  return (
    <div className="container2" ref={ref}>
      <h1
        className={`card-title text-3xl font-black text-center md:text-start pt-10 pb-4 md:pb-2 ${
          valor ? 'mostrar delay-[500ms] duration-[1000ms]' : 'oculto'
        }`}
      >
        Conheça a Peti9
      </h1>
      <Image
        className={`card-img m-auto ${
          valor
            ? 'mostrar md:delay-0 delay-[500ms] duration-[1000ms]'
            : 'oculto'
        }`}
        src={conhecaImage}
        alt="gatinho"
        width={0}
        height={0}
        style={{
          width: '80%',
          height: 'auto',
        }}
      />
      <div
        className={`flex flex-col text-center md:text-start gap-2 text-[18px] text-zinc-700 ${
          valor ? 'mostrar duration-[1000ms] delay-[1000ms]' : 'oculto'
        }`}
      >
        <p className="card-p1">
          A Peti9 é uma empresa dedicada ao desenvolvimento de soluções
          tecnológicas para a área veterinária.
        </p>
        <p className="card-p2">
          Com +10 anos de experiência no mercado, nosso objetivo é oferecer
          ferramentas que simplifiquem o dia a dia de clínicas veterinárias,
          proporcionando maior eficiência, organização e qualidade no
          atendimento.
        </p>
      </div>
      <div
        className={`flex justify-center md:justify-start ${
          valor ? 'mostrar duration-[1000ms] delay-[1500ms]' : 'oculto'
        }`}
      >
        <ExpBtn />
      </div>
    </div>
  )
}

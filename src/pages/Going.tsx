'use client'

import Image from 'next/image'
import clinical from '../../public/assets/next-level.jpg'
import { ExpBtn } from '@/Components/Buttons'
import useObserver from '@/hooks/useObserver'
import { useEffect, useState } from 'react'

export default function Going() {
  const { inIntersecting, ref, setInIntersecting } = useObserver()
  const [valor, setValor] = useState<boolean>(false)

  useEffect(() => {
    if (inIntersecting) {
      setValor(true)
    }
  }, [inIntersecting, setInIntersecting])

  return (
    <div className="container2 bg-zinc-50 mt-8 px-8" ref={ref}>
      <h1
        className={`text-3xl font-bold text-center pt-10 card-title md:text-start ${
          valor ? 'mostrar delay-[500ms] duration-[1000ms]' : 'oculto'
        }`}
      >
        Leve sua clínica para um próximo nível
      </h1>
      <Image
        className={`card-img m-auto ${
          valor
            ? 'mostrar md:delay-0 delay-[500ms] duration-[1000ms]'
            : 'oculto'
        }`}
        src={clinical}
        alt="Doginho"
        width={0}
        height={0}
        style={{
          width: '90%',
          height: 'auto',
        }}
      />
      <div
        className={`flex flex-col gap-4 text-center pt-4 text-[20px] mb-6 md:text-start ${
          valor ? 'mostrar duration-[1000ms] delay-[1000ms]' : 'oculto'
        }`}
      >
        <p className="card-p1">
          Não perca mais tempo lidando com papéis e processos manuais. Contrate
          agora o ERP Peti9 e experimente a tranquilidade e eficiência na gestão
          da sua clínica .
        </p>
        <p className="card-p2 md:text-start">
          Você não precisará se preocupar em aprender tudo sozinho. Estaremos ao
          seu lado desde o início até o final da implantação, com nosso
          atendimento humanizado. Nossa equipe se dedica a fornecer suporte e
          treinamento de qualidade, garantindo que você esteja completamente
          familiarizado com o ERP.
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

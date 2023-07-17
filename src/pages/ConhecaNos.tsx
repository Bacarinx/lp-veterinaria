import Image from 'next/image'
import conhecaImage from '../../public/assets/Conheca.jpg'
import { ExpBtn } from '@/Components/Buttons'

export default function ConhecaNos() {
  return (
    <div className="container2">
      <h1 className="card-title text-3xl font-black text-center md:text-start pt-10 pb-4 md:pb-2">
        Conheça a Peti9
      </h1>
      <Image
        className="card-img m-auto"
        src={conhecaImage}
        alt="gatinho"
        width={0}
        height={0}
        style={{
          width: '80%',
          height: 'auto',
        }}
      />
      <div className="flex flex-col text-center md:text-start gap-2 text-[18px] text-zinc-700">
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
      <div className="flex justify-center md:justify-start">
        <ExpBtn />
      </div>
    </div>
  )
}

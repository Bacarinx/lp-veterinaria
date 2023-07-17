import {
  AiFillCheckCircle,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineWhatsApp,
} from 'react-icons/ai'

import Logo from '../../public/assets/logoBranca.png'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="bg-teal-600 flex flex-col items-center justify-center text-white text-xl gap-8 py-8 font-bold mt-[64px] md:grid md:grid-cols-2 md:px-24">
        <div className="flex flex-col text-center gap-4 md:items-start">
          <div className=" flex flex-col items-center justify-center gap-2 md:flex-row md:text-start">
            <AiFillCheckCircle />
            <p>R. Manoel Antunes Corrêa, 1277, Centro – Tubarão/SC</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:text-start">
            <AiOutlineMail />
            <p>comercial@peti9.com</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <AiOutlinePhone />
            <p>(48) 3052-3222</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <AiOutlineWhatsApp />
            <p>(48) 98865-7417</p>
          </div>
        </div>
        <div className="m-auto md:w-[60%]">
          <Image
            className="m-auto"
            src={Logo}
            alt="logo"
            width={0}
            height={0}
            style={{ width: '85%', height: 'auto' }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center text-center text-zinc-600 p-10">
        <div className="flex flex-col gap-0 text-sm">
          <p className="flex">
            <span>&copy;</span>
            Pet i9 Sistemas.Todos os Direitos Reservados.
          </p>
          <p>CNPJ 27.037.963/0001-16.</p>
        </div>
        <p>
          Desenvolvimento:
          <a
            href="https://github.com/bacarinx"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#0D9488' }}
          >
            {''} Henrique Bacarin
          </a>
        </p>
      </div>
    </footer>
  )
}

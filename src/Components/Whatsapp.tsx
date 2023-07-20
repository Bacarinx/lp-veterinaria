import Image from 'next/image'
import whats from '../../public/assets/whatsapp.svg'

export default function Whatsapp() {
  return (
    <div className="sticky bottom-4 left-[92%] bg-green-500 md:w-[80px] md:h-[80px] w-[50px] h-[50px] flex rounded-full z-20">
      <a
        className="md:w-[60px] md:h-[60px] w-[30px] h-[30px] m-auto"
        href="https://web.whatsapp.com/send?phone=554898865-7417&text=Oi%20Gostaria%20de%20avaliar%20o%20sistema%20Peti9.%20Podemos%20falar?%20^^"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          className="m-auto md:w-[60px] md:h-[60px] w-[30px] h-[30px]"
          src={whats}
          alt="whats button"
          height={50}
          width={50}
        />
      </a>
    </div>
  )
}

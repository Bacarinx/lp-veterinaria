import Image from 'next/image'

const whats = '/assets/whatsapp.svg'
const seta = '/assets/right.svg'

export function ExpBtn() {
  return (
    <button className="experience-btn flex w-[95%] justify-center gap-4 items-center md:w-auto ">
      EXPERIMENTAR 7 DIAS GRÁTIS
      <Image src={seta} alt="seta" width={20} height={20} />
    </button>
  )
}

export function WhatsBtn() {
  return (
    <button className="whats-btn flex w-[95%] justify-center gap-4 items-center md:w-auto ">
      CHAMAR NO WHATSAPP
      <Image src={whats} alt="whats" width={20} height={20} />
    </button>
  )
}

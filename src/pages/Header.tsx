import { WhatsBtn, ExpBtn } from '@/Components/Buttons'
import Image from 'next/image'

const logo = '/assets/logo.png'
const veterinario = '/assets/veterinario.png'

export default function Header() {
  return (
    <header className="flex flex-col justify-center text-white md:text-start">
      <nav className="py-3 flex justify-around">
        <div>
          <Image src={logo} alt="logo" width={200} height={62} />
        </div>
        <div className="md:flex hidden gap-4">
          <WhatsBtn />
          <ExpBtn />
        </div>
      </nav>
      <div className="header-container md:text-start md:py-8 px-8 md:px-32 text-center flex flex-col md:justify-start md:items-start justify-center items-center bg-teal-600 ">
        <div className="header-subtitle">
          <h2 className="first-line:text-2xl font-bold py-8">
            DESCOMPLIQUE A GESTÃO
          </h2>
        </div>
        <div className="header-title mb-4">
          <h1 className="text-3xl font-bold">
            O ERP PERFEITO PARA SUA{' '}
            <span className=" underline">CLÍNICA VETERINÁRIA</span>
          </h1>
        </div>
        <div className="w-full">
          <Image
            className="header-img m-auto justify-center items-center"
            src={veterinario}
            alt="veterinario"
            width={450}
            height={450}
          />
        </div>
        <div className="header-body mt-6">
          <p className="text-xl py-2">
            Simplifique e otimize a gestão da sua clínica veterinária, reduzindo
            custos e otimizando processos.
          </p>
          <p className="text-xl py-2">
            Nossa plataforma é intuitiva e fácil de usar. Tenha acesso a todos
            os recursos necessários para automatizar tarefas e organizar melhor
            as informações.
          </p>
        </div>
        <div className="md:hidden flex header-buttons md:flex-row flex-col items-center justify-center gap-6 pb-16 w-full">
          <WhatsBtn />
          <ExpBtn />
        </div>
      </div>
    </header>
  )
}

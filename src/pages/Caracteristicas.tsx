import Caracteristica from '../Components/Caracteristica'

import produtividadeE from '../../public/assets/Animated/diagrama.png'
import produtividadeD from '../../public/assets/Animated/diagrama.gif'
import veterinariaE from '../../public/assets/Animated/veterinario.png'
import veterinariaD from '../../public/assets/Animated/veterinario.gif'
import globoE from '../../public/assets/Animated/globo-terrestre.png'
import globoD from '../../public/assets/Animated/globo-terrestre.gif'

import { ExpBtn } from '../Components/Buttons'

export default function Caracteristicas() {
  return (
    <div>
      <div className="md:flex md:flex-col mt-10 mb-6 gap-4">
        <div>
          <h1 className="font-bold text-3xl text-center">
            Por que escolher a Peti9 para sua Clínica Veterinária?
          </h1>
        </div>
        <div className="md:flex">
          <Caracteristica
            image={{
              dina: produtividadeD,
              esta: produtividadeE,
            }}
            title={'Produtividade'}
            body={
              'Aumente a produtividade da sua clínica veterinária em até 30% com as nossas soluções.'
            }
          />
          <Caracteristica
            image={{
              dina: veterinariaD,
              esta: veterinariaE,
            }}
            title={'Foco na área veterinária'}
            body={
              'Equipe formada por profissionais especializados em TI e apaixonados por animais, garantindo que nossas soluções atendam às necessidades do setor veterinário..'
            }
          />
          <Caracteristica
            image={{
              dina: globoD,
              esta: globoE,
            }}
            title={'Suporte humaizado'}
            body={
              'Oferecemos suporte técnico especializado e humanizado para auxiliá-lo em quaisquer possíveis dúvidas ou dificuldades que surgir.'
            }
          />
        </div>
        <div className="flex items-center justify-center">
          <ExpBtn />
        </div>
      </div>
    </div>
  )
}

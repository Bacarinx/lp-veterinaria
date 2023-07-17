import { AnimatedIcon } from '@/Components/AnimatedIcon'
import Duvida from '@/Components/Duvida'

import imageE from '../../public/assets/Animated/balao-de-fala.png'
import imageD from '../../public/assets/Animated/balao-de-fala.gif'
import { ExpBtn } from '@/Components/Buttons'

export default function FAQ() {
  return (
    <div className="flex flex-col justify-center md:grid md:grid-cols-2 md:w-[80%] md:m-auto">
      <h1 className="text-center text-3xl font-bold pb-4 pt-8 md:col-start-1">
        F.A.Q - Dúvidas Recorrentes
      </h1>
      <div className="p-8 md:col-start-1">
        <Duvida
          question={'É possível migrar meus dados de outro ERP para a Peti9?'}
          answer={
            'Sim, a Peti9 oferece suporte para a migração de dados de outros ERP’s de gestão. Nossa equipe está preparada para auxiliá-lo no processo de transferência de dados, garantindo que todas as informações importantes sejam preservadas durante a transição.'
          }
        />
        <Duvida
          question={'É possível migrar meus dados de outro ERP para a Peti9?'}
          answer={
            'Sim, a Peti9  oferece suporte para a migração de dados de outros ERP’s de gestão. Nossa equipe está preparada para auxiliá-lo no processo de transferência de dados, garantindo que todas as informações importantes sejam preservadas durante a transição.'
          }
        />
        <Duvida
          question={
            'Como posso obter suporte técnico em caso de dúvidas ou problemas?'
          }
          answer={
            'A Peti9  oferece suporte técnico especializado para auxiliá-lo em caso de dúvidas ou problemas. Você pode entrar em contato com nossa equipe via e-mail, telefone ou chat online. Estamos prontos para fornecer o suporte necessário e garantir o bom funcionamento do ERP.'
          }
        />
        <Duvida
          question={
            'Quais são as medidas de segurança adotadas pela Peti9 para proteger meus dados?'
          }
          answer={
            'A Peti9 leva a segurança dos dados de sua clínica veterinária muito a sério. Utilizamos criptografia avançada, backups automatizados e protocolos de segurança rigorosos para proteger suas informações contra acesso não autorizado. Além disso, seguimos as melhores práticas de privacidade e conformidade com a legislação vigente.'
          }
        />
        <Duvida
          question={'É possível importar dados de pacientes de outro ERP?'}
          answer={
            'Sim, é possível importar os dados dos seus pacientes de outro sistema para a Peti9. Nossa equipe de suporte pode auxiliá-lo nesse processo.'
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-6 md:col-start-2">
        <AnimatedIcon
          estatico={imageE}
          dinamico={imageD}
          alt="conversation"
          prop={120}
        />
        <ExpBtn />
      </div>
    </div>
  )
}

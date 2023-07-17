import Client from '@/Components/Client'
import client2 from '../../public/assets/clientes/1-146x146-1.jpg'
import client3 from '../../public/assets/clientes/2-150x150-1.jpg'
import client1 from '../../public/assets/clientes/3-146x146-1.jpg'
import { ExpBtn } from '@/Components/Buttons'

export default function CLients() {
  return (
    <div>
      <h1 className="text-teal-600 text-[42px] font-bold text-center py-8 px-12">
        Depoimentos dos nossos clientes
      </h1>
      <div className="md:flex">
        <Client
          body={'O ERP da '}
          body2={
            ' é muito dinâmico e atende às necessidades específicas de cada negócio. Apesar de ser um ERP comercial, ele se customiza para cada realidade solicitada pelo cliente. Estamos satisfeitos com a mudança, principalmente pelo real conhecimento contábil que o ERP realiza através das conciliações gerenciais.'
          }
          client={{
            image: client1,
            names: 'André e Carina Freccia',
            local: 'MCA Clinica veterinária - Tubarão',
          }}
        />
        <Client
          body={'O ERP '}
          body2={
            ' aqui na VetVillage nos ajudou muito integrando todos os processos da clínica, banho e tosa e ponto de venda.'
          }
          client={{
            image: client2,
            names: 'Adriano de Souza Neto & Suzana Ribeiro Matsumoto Neto',
            local: 'Vet Village - Florianópolis',
          }}
        />
        <Client
          body={
            'Foi o melhor investimento que fizemos no último ano: implantar um ERP específico para petshop. Faz toda a diferença no nosso dia a dia, no atendimento aos clientes e na organização da empresa. Além disso, tenho certeza que escolhemos o parceiro certo. Desde a implantação até o suporte, funciona super bem. Melhor experiência de pós-venda que já tivemos. O pessoal da '
          }
          body2={
            ' sempre ouve nossas sugestões e estão sempre trabalhando para evoluir.'
          }
          client={{
            image: client3,
            names: 'Graziele Klaumann Larré',
            local: 'Mamute Pet Shop - Balneário Camboriú',
          }}
        />
      </div>
      <div className="flex items-center justify-center">
        <ExpBtn />
      </div>
    </div>
  )
}

import CardInfo from '../Components/CardInfo'

import lembrete from '../../public/assets/lembretes.png'
import historico from '../../public/assets/historico-clinico.png'
import ficha from '../../public/assets/ficha.png'
import controle from '../../public/assets/controle-vacinacao.png'
import gestao from '../../public/assets/Gestao-de-estoque.png'
import notas from '../../public/assets/nota-fiscal.png'
import painel from '../../public/assets/painel-financeiro.png'
import receitas from '../../public/assets/receituario.png'
import formularios from '../../public/assets/formulario-autorizacao.png'

export default function Cards() {
  return (
    <div className="w-[full] flex flex-col items-center justify-center">
      <CardInfo
        image={lembrete}
        title={'Lembretes automáticos'}
        body={
          'Conte com lembretes automáticos de vacinas para os pets dos seus clientes. Esquecer datas importantes nunca mais será um problema! Mantenha seus clientes informados sobre as próximas doses necessárias e demonstre seu compromisso com a saúde dos animais.'
        }
        body2={'Aumente em até 34% suas vendas de vacina em apenas dois meses.'}
        Primary={true}
      />
      <CardInfo
        image={historico}
        title={'Histórico clínico completo'}
        body={
          'Tenha acesso fácil e rápido a todas as informações sobre seus pacientes. Com a Peti9 você mantém histórico clínico completo, incluindo exames, diagnósticos e tratamentos realizados. Isso possibilita um atendimento mais personalizado, com dados relevantes sempre à mão.'
        }
        Primary={false}
      />
      <CardInfo
        image={ficha}
        title={'Ficha clínica simplificada'}
        body={
          'Com nosso ERP, você faz o registro de todas as informações do atendimento veterinário, anexando fotos, PDFs e outros documentos.'
        }
        body2={
          'Além disso, todos os serviços veterinários prestados durante o atendimento serão automaticamente incluídos na ficha clínica, permitindo mais agilidade no checkout do Pet.'
        }
        Primary={true}
      />
      <CardInfo
        image={controle}
        title={'Controle de vacinação'}
        body={
          'Mantenha um registro preciso das vacinas administradas em cada animal.'
        }
        body2={
          'Nosso software de gestão permite que você acompanhe as aplicações, defina lembretes automáticos para doses futuras e esteja sempre conforme o calendário de imunização.'
        }
        Primary={false}
      />
      <CardInfo
        image={gestao}
        title={'Gestão de estoque'}
        body={
          'Otimize o controle de medicamentos e produtos em sua clínica veterinária. Com o módulo de gestão de estoque da Peti9, você consegue monitorar a quantidade de cada item, receber alertas de reposição, rastrear as movimentações e evitar desperdícios.  Tenha o abastecimento adequado para atender às demandas dos seus pacientes. '
        }
        Primary={true}
      />
      <CardInfo
        image={notas}
        title={'Notas fiscais'}
        body={
          'Simplifique o processo de emissão de notas fiscais como: NF-e, NFC-e e NFS-e. A Peti9 oferece um módulo integrado para a sua emissão eletrônica, permitindo que você registre os procedimentos realizados e tenha um controle financeiro mais eficiente.  Mantenha sua clínica conforme as obrigações fiscais de forma prática e segura.'
        }
        Primary={false}
      />
      <CardInfo
        image={painel}
        title={'Painel financeiro'}
        body={
          'Painel de gestão financeira, que apresenta dados como recebidos, ticket médio do seu estabelecimento, clientes inadimplentes, número de consultas por mês, contas a receber, contas a pagar, saldo em conta, previsão de fechamento e muito mais.'
        }
        Primary={true}
      />
      <CardInfo
        image={receitas}
        title={'Receitas de medicamentos'}
        body={
          'A Peti9 oferece um módulo completo para a emissão de receitas médicas de forma fácil e segura. Com ele, você cria receitas personalizadas digitalmente, agilizando o processo e evitando erros na prescrição.'
        }
        Primary={false}
      />
      <CardInfo
        image={formularios}
        title={'Formulários e autorizações'}
        body={
          'Com a Peti9, você terá acesso à facilidade de emissão de formulários e autorizações a qualquer momento.  Através do cadastro do animal ou histórico clínico, você consegue imprimir os formulários de atendimento veterinário conforme as orientações do Conselho Federal de Medicina Veterinária, assim como as requisições de exames.'
        }
        Primary={true}
      />
    </div>
  )
}

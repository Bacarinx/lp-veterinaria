import Caracteristicas from '@/pages/Caracteristicas'
import Cards from '@/pages/Cards'
import CarouselPage from '@/pages/CarouselPage'
import CLients from '@/pages/Clients'
import ConhecaNos from '@/pages/ConhecaNos'
import FAQ from '@/pages/FAQ'
import Going from '@/pages/Going'
import Statistics from '@/pages/Statistics'

export default function Home() {
  return (
    <div>
      <CarouselPage />
      <Cards />
      <Caracteristicas />
      <ConhecaNos />
      <CLients />
      <Statistics />
      <FAQ />
      <Going />
    </div>
  )
}

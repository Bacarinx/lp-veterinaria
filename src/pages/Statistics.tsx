import Statistic from '@/Components/Statistic'
import house from '../../public/assets/data/house.png'
import estados from '../../public/assets/data/estados.png'
import dog from '../../public/assets/data/dog.png'

export default function Statistics() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center m-auto w-[90%] pt-12 gap-6 division">
      <Statistic
        startValue={0}
        finalValue={310}
        image={house}
        body2={'Clínicas'}
      />
      <Statistic
        startValue={0}
        finalValue={24}
        image={estados}
        body1={'Presente em'}
        body2={'Estados'}
      />
      <Statistic
        startValue={0}
        finalValue={1280027}
        image={dog}
        body2={'Animais Atendidos'}
      />
    </div>
  )
}

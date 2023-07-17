import { AnimatedIcon } from './AnimatedIcon'

interface CaracteristicaProps {
  image: any
  title: string
  body: any
}

export default function Caracteristica({
  image,
  title,
  body,
}: CaracteristicaProps) {
  return (
    <div className="border border-black rounded-lg m-4 p-8 flex flex-col justify-center items-center md:w-[33%] md:m-2 md:p-2">
      <AnimatedIcon
        estatico={image.esta}
        dinamico={image.dina}
        alt={'image'}
        prop={60}
      />
      <h1 className="text-center text-2xl text-orange-700 font-bold pt-4">
        {title}
      </h1>
      <p className="text-center text-sm">{body}</p>
    </div>
  )
}

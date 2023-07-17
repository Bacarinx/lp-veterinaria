import Image from 'next/image'

interface ClientProps {
  body: string
  body2: string
  client: any
}

export default function Client(props: ClientProps) {
  return (
    <div className="border mx-4 p-6 mb-6 rounded-lg md:w-[30%]">
      <p className="text-zinc-800">
        {props.body}
        <span className="font-bold">Peti9</span>
        {props.body2}
      </p>
      <div className="flex items-center gap-4 pt-4">
        <Image
          className="rounded-full"
          src={props.client.image}
          alt={'client'}
          width={60}
          height={60}
        />
        <div className="flex flex-col">
          <h2 className="text-[17px]">{props.client.names}</h2>
          <h3 className="text-zinc-400">{props.client.local}</h3>
        </div>
      </div>
    </div>
  )
}

import Image from 'next/image'
import { ExpBtn } from './Buttons'

interface CardProps {
  image: any
  title: string
  body: string
  body2?: string
  Primary: boolean
}

export default function CardInfo(props: CardProps) {
  return (
    <div
      className={`${
        props.Primary ? 'container' : 'container2'
      } md:w-[80%] m-auto mb-8 md:mb-24`}
    >
      <h1 className="card-title md:text-5xl text-3xl font-black text-center md:text-start  pt-6 pb-4 mb-2 md:mb-4">
        {props.title}
      </h1>
      <Image
        className="card-img m-auto"
        src={props.image}
        alt=""
        width={0}
        height={0}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <div className="md:text-start ">
        <p className="card-p1 text-center md:text-start text-[18px] pb-2">
          {props.body}
        </p>
        {props.body2 && (
          <p className="card-p2 text-center md:text-start text-[18px] pb-2">
            {props.body2}
          </p>
        )}
        <div className="card-btn flex justify-center items-center md:justify-start pt-4 md:m-0">
          <ExpBtn />
        </div>
      </div>
    </div>
  )
}

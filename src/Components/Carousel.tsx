'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import img1 from '../../public/assets/anuncio/anuncio1.jpg'
import img2 from '../../public/assets/anuncio/anuncio2.jpg'
import img3 from '../../public/assets/anuncio/anuncio3.jpg'
import img4 from '../../public/assets/anuncio/anuncio4.jpg'
import img5 from '../../public/assets/anuncio/anuncio5.jpg'
import img6 from '../../public/assets/anuncio/anuncio6.jpg'
import img7 from '../../public/assets/anuncio/anuncio7.jpg'
import img8 from '../../public/assets/anuncio/anuncio8.jpg'
import img9 from '../../public/assets/anuncio/anuncio9.jpg'
import img10 from '../../public/assets/anuncio/anuncio10.jpg'
import img11 from '../../public/assets/anuncio/anuncio11.jpg'
import img12 from '../../public/assets/anuncio/anuncio12.jpg'
import img13 from '../../public/assets/anuncio/anuncio13.jpg'

export default function Carousel() {
  const tamanho = 200

  return (
    <div className="">
      <Swiper
        modules={[Navigation]}
        className=" md:w-[85%] select-none"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        spaceBetween={10}
        speed={300}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          992: {
            slidesPerView: 7,
          },
        }}
      >
        <SwiperSlide>
          <Image src={img1} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img2} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img3} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img4} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img5} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img6} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img7} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img8} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img9} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img10} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img11} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img12} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={img13} alt="aleatoria" height={tamanho} width={tamanho} />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

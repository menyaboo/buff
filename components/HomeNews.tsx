'use client'
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import required modules
import {Autoplay, FreeMode} from 'swiper/modules';

const news = [
  {
    id: 1,
    img: "x06lbrEN3i8.jpg",
    name: 'Режим работы кассы',
    description: "Уважаемые зрители! " +
      "Мы открыли продажи билетов на август и сентябрь! Обращаем ваше внимание, " +
      "что в летний период изменился режим работы кассы театра. С 10 июля по 14 августа касса " +
      "работает с 13:00 до 18:00. Также можно приобрести билеты онлайн на нашем сайте.",
    date: new Date(2023, 8, 15)
  },
  {
    id: 2,
    img: "x06lbrEN3i8.jpg",
    name: 'Режим работы кассы',
    description: "Уважаемые зрители! " +
      "Мы открыли продажи билетов на август и сентябрь! Обращаем ваше внимание, " +
      "что в летний период изменился режим работы кассы театра. С 10 июля по 14 августа касса " +
      "работает с 13:00 до 18:00. Также можно приобрести билеты онлайн на нашем сайте.",
    date: new Date(2023, 8, 15)
  },
  {
    id: 3,
    img: "x06lbrEN3i8.jpg",
    name: 'Режим работы кассы',
    description: "Уважаемые зрители! " +
      "Мы открыли продажи билетов на август и сентябрь! Обращаем ваше внимание, " +
      "что в летний период изменился режим работы кассы театра. С 10 июля по 14 августа касса " +
      "работает с 13:00 до 18:00. Также можно приобрести билеты онлайн на нашем сайте.",
    date: new Date(2023, 8, 15)
  },
  {
    id: 4,
    img: "x06lbrEN3i8.jpg",
    name: 'Режим работы кассы',
    description: "Уважаемые зрители! " +
      "Мы открыли продажи билетов на август и сентябрь! Обращаем ваше внимание, " +
      "что в летний период изменился режим работы кассы театра. С 10 июля по 14 августа касса " +
      "работает с 13:00 до 18:00. Также можно приобрести билеты онлайн на нашем сайте.",
    date: new Date(2023, 8, 15)
  },
  {
    id: 5,
    img: "x06lbrEN3i8.jpg",
    name: 'Режим работы кассы',
    description: "Уважаемые зрители! " +
      "Мы открыли продажи билетов на август и сентябрь! Обращаем ваше внимание, " +
      "что в летний период изменился режим работы кассы театра. С 10 июля по 14 августа касса " +
      "работает с 13:00 до 18:00. Также можно приобрести билеты онлайн на нашем сайте.",
    date: new Date(2023, 8, 15)
  },
]

function getDate(date: Date):any {
  if (!date) return
  return `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`
}


export default function HomeNews() {
  return (
    <div className={'home-news container'}>
      <div className={'flex items-center justify-between'}>
        <h1>Новости</h1>
        <Link href={"/"}>ВСЕ НОВОСТИ </Link>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
        }}
        speed={1000}
        className="slider"
      >
        {news.map((el, index) =>
          <SwiperSlide key={index}>
            <div className={'slider-item'}>
              <div className={'item-img'} style={{background: `url(/img/${el.img}) center center no-repeat`}}></div>
              <p className={'date'}>{getDate(el.date)}</p>
              <h1 className={'name'}>{el.name}</h1>
              <p className={'description'}>{el.description}</p>
            </div>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  )
}

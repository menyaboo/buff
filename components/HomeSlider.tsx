'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "@/public/img/x06lbrEN3i8.jpg"
import img2 from "@/public/img/h7w2LkSf1Og.jpg"
import img3 from "@/public/img/U2skRr1GPpg.jpg"
import img4 from "@/public/img/x9zH4L2gOD8.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';

// import required modules
import { Scrollbar, Autoplay } from 'swiper/modules';

export default function HomeSlider() {
    return (
        <Swiper
            scrollbar={{
                hide: true,
            }}
            modules={[Scrollbar, Autoplay]}
            className="home-slider"
            loop={true}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false
            }}
            speed={800}
        >
            <SwiperSlide>
                <div className={'slider-wrapper'} style={{background: `url(${img1.src}) center -150px no-repeat` }}>
                    <div className={'container mx-auto slider-body'}>
                        <div className={'info'}>
                            <h1>Ромео и Джульетта</h1>
                            <p>Уильям Шекспир</p>
                        </div>
                        <button>
                            Купить билет
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={'slider-wrapper'} style={{background: `url(${img2.src}) center -150px no-repeat` }}>
                    <div className={'container mx-auto slider-body'}>
                        <div className={'info'}>
                            <h1>Горе от ума</h1>
                            <p>Александр Грибоедов</p>
                        </div>
                        <button>
                            Купить билет
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={'slider-wrapper'} style={{background: `url(${img3.src}) center -150px no-repeat` }}>
                    <div className={'container mx-auto slider-body'}>
                        <div className={'info'}>
                            <h1>Вишневый сад</h1>
                            <p>Антон Чехов</p>
                        </div>
                        <button>
                            Купить билет
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={'slider-wrapper'} style={{background: `url(${img4.src}) center -150px no-repeat` }}>
                    <div className={'container mx-auto slider-body'}>
                        <div className={'info'}>
                            <h1>Шекспир в любви</h1>
                            <p>Джон Мисто</p>
                        </div>
                        <button>
                            Купить билет
                        </button>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}

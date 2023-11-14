import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import './Swiper.scss'
import { Autoplay} from 'swiper/modules';
import apiInstance from '../../api';

const Carusel = () => {
    const [bitcoinData, setBitcoinData] = useState([])
    fetch("https://api.coingecko.com/api/v3/coins/")
    .then(response => response.json())
    .then(data => setBitcoinData(data))
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
            {
                bitcoinData.slice(0, 4).map(card =>
                <div>
                    <img src={card.image.large} alt="" />
                </div>
                )
            }
        </SwiperSlide>
        <SwiperSlide>
            {
                bitcoinData.slice(4, 8).map(card =>
                <div>
                    <img src={card.image.large} alt="" />
                </div>
                )
            }
        </SwiperSlide>
        <SwiperSlide>
            {
                bitcoinData.slice(8, 12).map(card =>
                <div>
                    <img src={card.image.large} alt="" />
                </div>
                )
            }
        </SwiperSlide>
        <SwiperSlide>
            {
                bitcoinData.slice(12, 16).map(card =>
                <div>
                    <img src={card.image.large} alt="" />
                </div>
                )
            }
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Carusel



{/* <SwiperSlide>Slide 1</SwiperSlide> */}
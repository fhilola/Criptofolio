import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './Swiper.scss'
import { Autoplay} from 'swiper/modules';
import { Link } from 'react-router-dom';

const Carusel = () => {
    const [bitcoinData, setBitcoinData] = useState([])
    fetch("https://api.coingecko.com/api/v3/coins/")
    .then(response => response.json())
    .then(data => {
        setBitcoinData(data)
    })
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
                <Link to={`single-currency/${card.id}`} className='coin-info' key={card.id}>
                    <img src={card.image.large} alt="" />
                    <span>{card.symbol}  <strong>+1.66%</strong></span>
                    <small>${card.market_data.current_price.aed}</small>
                </Link>
                )
            }
        </SwiperSlide>
        <SwiperSlide>
            {
                bitcoinData.slice(4, 8).map(card =>
                <Link to={`single-currency/${card.id}`} className='coin-info' key={card.id}>
                    <img src={card.image.large} alt="" />
                    <span>{card.symbol}  <strong>+3.21%</strong></span>
                    <small>${card.market_data.current_price.aed}</small>
                </Link>
                )
            }
        </SwiperSlide>
        <SwiperSlide>
            {
                bitcoinData.slice(8, 12).map(card =>
                <Link to={`single-currency/${card.id}`} className='coin-info' key={card.id}>
                    <img src={card.image.large} alt="" />
                    <span>{card.symbol}  <strong>+2.45%</strong></span>
                    <small>${card.market_data.current_price.aed}</small>
                </Link>
                )
            }
        </SwiperSlide>
        <SwiperSlide>
            {
                bitcoinData.slice(12, 16).map(card =>
                <Link to={`single-currency/${card.id}`} className='coin-info' key={card.id}>
                    <img src={card.image.large} alt="" />
                    <span>{card.symbol}  <strong>+1.68%</strong></span>
                    <small>${card.market_data.current_price.aed}</small>
                </Link>
                )
            }
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default Carusel
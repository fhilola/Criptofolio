import './SingleCurrency.scss'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiInstance from '../../api'
import chart from '../../assets/images/chart.png'

const SingleCurrency = () => {
  const { id } = useParams()
  const [singleData, setSingleData] = useState(null)
  useEffect(() => {
    const getSingleCurrencyData = async (e) => {
      e.preventDefault()
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
        const data = await response.json()
        setSingleData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getSingleCurrencyData()
  }, [singleData])
  return (
    <section className="single__currency">
      <div className="single__content">
        <img src={singleData.image.large} alt="" />
        <h2>{singleData.name}</h2>
        <p>{singleData.description.en.slice(0, 300)}</p>
        <strong>Rank: <span>{singleData.market_cap_rank}</span></strong>
        <strong>Current Price: <span>${singleData.market_data.current_price.aed}</span></strong>
      </div>
      <div className="chart">
        <img src={chart} alt="" />
      </div>
    </section>
  )
}

export default SingleCurrency
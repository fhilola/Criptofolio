import React, { useEffect, useState } from 'react'
import ItemsTable from '../items-table/ItemsTable'
import Pnation from '../pnation/Pnation'

const Items = () => {
  const [items, setItems] = useState([])
  useEffect(()=>{
    fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h')
    .then(response => response.json())
    .then(data => setItems(data))
  },[])
  return (
    <div>
        <ItemsTable items={items}/>
        <Pnation items={items}/>
    </div>
  )
}

export default Items
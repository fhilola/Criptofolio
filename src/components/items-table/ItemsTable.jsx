import { Container } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const ItemsTable = ({ items }) => {
    return (
        <section className="items__wrapper">
            <Container>
                <table>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Price</th>
                            <th>24h Change</th>
                            <th>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(item => 
                            // console.log(item)
                            <tr key={item.id}>
                                <Link to={'single-currency'}>
                                <td>
                                    <div>
                                        <img src={item.image} alt="" />
                                        <span>{item.symbol.toUpperCase()}<strong>{item.name}</strong></span>
                                    </div>
                                </td>
                                <td>
                                    <span>${item.current_price}</span>
                                </td>
                                <td>
                                    
                                </td>
                                <td></td>
                                </Link>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </Container>
        </section>
    )
}
export default ItemsTable
import './ItemsTable.scss'
import { Container } from '../../utils'
import { Link } from 'react-router-dom'
import { IoEye } from "react-icons/io5";

const ItemsTable = ({ items }) => {
    return (
        <section className="items__wrapper">
            <Container>
                <table className='table__wrapper'>
                    <thead>
                        <tr className='item-th'>
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
                                <tr className='item-tr' key={item.id}>
                                    <Link to={'single-currency'}>
                                        <td>
                                            <div className='currency-image__wrapper'>
                                                <img src={item.image} alt="" />
                                                <span>{item.symbol.toUpperCase()}<strong>{item.name}</strong></span>
                                            </div>
                                        </td>
                                        <td>
                                            <span>${item.current_price}</span>
                                        </td>
                                        <td>
                                            <small style={{color: 'lightgreen'}}><i style={{color: 'white'}}><IoEye /></i>{item.price_change_percentage_24h}</small>
                                        </td>
                                        <td>${item.market_cap}</td> 
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
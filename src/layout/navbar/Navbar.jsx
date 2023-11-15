import './Navbar.scss'
import logo from '../../assets/images/logo.svg'
import { Button, Container } from '../../utils'
import { useReducer, useState } from 'react'
import reducer from '../../components/items-table/helpers/reducer'
import { Link } from 'react-router-dom'

const Navbar = () => {
  // const data = JSON.parse(localStorage.getItem("data"))
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("data")) || [])
  console.log(state);
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  return (
    <>
      <nav>
        <Container>
          <div className="nav__wrapper">
            <div className="nav__logo">
              <img src={logo} alt="" />
              <h1 className='navbar__title'>CRYPTOFOLIO</h1>
            </div>
            <div className="nav__action">
              <select>
                <option value="usd">USD</option>
                <option value="rub">RUB</option>
                <option value="uzb">UZB</option>
              </select>
              <Button text={'watch list'} onClick={toggle}/>
            </div>
          </div>
        </Container>
      </nav>
      <aside>
        <h3>WATCHLIST</h3>
        <div className="aside__content">
          {
            state.map(info => 
            <Link key={info.id} className='aside-single__item'>
            <img src={info.image} alt="" />
            <span>{info.market_cap / 1000}</span>
            <button>Remove</button>
            </Link>
            )
          }
        </div>
      </aside>
    </>
  )
}

export default Navbar
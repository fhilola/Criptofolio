import './Navbar.scss'
import logo from '../../assets/images/logo.svg'
import { Button, Container } from '../../utils'
import { useReducer, useState } from 'react'
import reducer from '../../components/items-table/helpers/reducer'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [state, dispatch] = useReducer(reducer, JSON.parse(localStorage.getItem("data")) || [])
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  console.log(isOpen);
  return (
    <>
      <nav>
        <Container>
          <div className="nav__wrapper">
            <Link to={'/'} className="nav__logo">
              <img src={logo} alt="" />
              <h1 className='navbar__title'>CRYPTOFOLIO</h1>
            </Link>
            <div className="nav__action">
              <select>
                <option value="usd">USD</option>
                <option value="rub">RUB</option>
                <option value="uzb">UZB</option>
              </select>
              <Button text={'watch list'} click={toggle}/>
            </div>
          </div>
        </Container>
      </nav>
      <aside style={{transform: isOpen ? 'translateX(-0px)' : 'translateX(450px)'}}>
        <h3>WATCHLIST</h3>
        <div className="aside__content">
          {
            state.map(info => 
            <div to={'single-currency'} key={info.id} className='aside-single__item'>
            <Link to={`single-currency/${info.id}`}>
            <img src={info.image} alt="" />
            </Link>
            <span>{info.market_cap / 1000}</span>
            <button>Remove</button>
            </div>
            )
          }
        </div>
      </aside>
    </>
  )
}

export default Navbar
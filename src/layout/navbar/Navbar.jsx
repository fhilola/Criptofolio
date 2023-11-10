import './Navbar.scss'
import logo from '../../assets/images/logo.svg'
import { Button, Container } from '../../utils'

const Navbar = () => {
  return (
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
            <Button text={'watch list'}/>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
import logo from '../../assets/images/logo.svg'
import { Container } from '../../utils'

const Navbar = () => {
  return (
    <nav>
      <Container>
        <div className="nav__wrapper">
          <div className="nav__logo">
            <img src={logo} alt="" />
            <h1></h1>
          </div>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
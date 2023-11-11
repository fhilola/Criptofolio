import './Home.scss'
import hero from '../../assets/images/hero.jpg'
import { Container } from '../../utils'

const Home = () => {
  return (
    <main>
        <div className="hero__wrapper">
          <img src={hero} alt="" />
        </div>
        <div className="hero__content">
          <Container>
            <h2>CRYPTOFOLIO WATCH LIST</h2>
            <p>Get all the Info regarding your favorite Crypto Currency</p>
            <div className="carusel__wrapper">
              
            </div>
          </Container>
        </div>
    </main>
  )
}

export default Home
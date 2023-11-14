import './Hero.scss'
import { Container } from '../../utils'
import hero from '../../assets/images/hero.jpg'
import Carusel from '../swiper/Swiper'

const Hero = () => {
    return (
        <main>
            <img src={hero} alt="" />
            <div className="hero__wrapper">
                <Container>
                    <div className="hero__content">
                        <h2>CRYPTOFOLIO WATCH LIST</h2>
                        <p>Get all the Info regarding your favorite Crypto Currency</p>
                        <Carusel/>
                    </div>
                </Container>
            </div>
        </main>
    )
}

export default Hero
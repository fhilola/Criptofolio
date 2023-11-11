import './Home.scss'
import { Container } from '../../utils'
import hero from '../../assets/images/hero.jpg'

const Home = () => {
  return (
    <main>
        <div className="hero__wrapper">
          <img src={hero} alt="" />
        </div>
    </main>
  )
}

export default Home
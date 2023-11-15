import './Home.scss'
import Hero from '../../components/hero/Hero'
import Search from '../../components/search/Search'
import Items from '../../components/items/Items'

const Home = () => {
  return (
    <>
      <Hero />
      <Search />
      <Items/>
    </>
  )
}

export default Home
import { Container } from '../../utils'
import './Search.scss'

const Search = () => {
  return (
    <section className='searchbar'>
        <Container>
            <h2>Cryptocurrency Prices by Market Cap</h2>
        <form>
            <input type="text" placeholder='Search For a Crypto Currency..'/>
        </form>
        </Container>
    </section>
  )
}

export default Search
import {Routes, Route} from 'react-router-dom'
import Home from './home/Home'
import SingleCurrency from './single-currency/SingleCurrency'

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/single-currency' element={<SingleCurrency/>}/>
    </Routes>
  )
}
export default routes
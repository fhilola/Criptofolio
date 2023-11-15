import {Routes, Route} from 'react-router-dom'
// import Home from './home/Home'
// import SingleCurrency from './single-currency/SingleCurrency'
import { Suspense, lazy } from 'react'
const Home = lazy(()=>import('./home/Home'))
const SingleCurrency = lazy(()=>import('./single-currency/SingleCurrency'))

const routes = () => {
  return (
    <Routes>
      <Route path='/' element={<Suspense fallback={<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}>
        <Home/>
      </Suspense>}/>
      <Route path='/single-currency/:id' element={<Suspense fallback={<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>}>
        <SingleCurrency/>
      </Suspense>}/>
    </Routes>
  )
}
export default routes
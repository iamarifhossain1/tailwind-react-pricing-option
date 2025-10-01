import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'

const loadPricingData = async () => {
  const fetchPrice = await fetch('/pricingData.json')
  const response = await fetchPrice.json();
  return response;
}

const pricePromise = loadPricingData ()

function App() {
  

  return (
    <>
      <header>
        <NavBar></NavBar>
       {/* <DaisyNav></DaisyNav> */}
      </header>

      <main>
        <Suspense fallback={<div className='flex justify-center mt-10'><span className=" loading loading-spinner loading-xl"></span></div>}>
          <PricingOptions pricePromise={pricePromise}></PricingOptions>
        </Suspense>
      </main>
    </>
  )
}

export default App

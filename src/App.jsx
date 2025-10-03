import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PricingOptions from './components/PricingOptions/PricingOptions'
import LineRechart from './components/LineRechart/LineRechart'
import Chart from './components/Chart/Chart'
import BarRechart from './components/BarRechart/BarRechart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'


const loadPricingData = async () => {
  const fetchPrice = await fetch('/pricingData.json')
  const response = await fetchPrice.json();
  return response;
}

const pricePromise = loadPricingData ()
const marksDataPromise = axios.get('marksData.json')

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

        {/* <LineRechart></LineRechart> */}
        {/* <Chart></Chart>
        <BarRechart></BarRechart> */}

        <Suspense fallback={<div className='flex justify-center mt-10'><span className=" loading loading-spinner loading-xl"></span></div>}>
          <MarksChart key={marksDataPromise.id} marksDataPromise={marksDataPromise}></MarksChart>
        </Suspense>
        
      </main>
    </>
  )
}

export default App

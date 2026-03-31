import { Suspense } from 'react'
import './App.css'
 import { ToastContainer, toast } from 'react-toastify';
import Counter from './Components/Counter/Counter'
import GetStarted from './Components/GetStarted/GetStarted'
import Banner from './Components/NavBar/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import PremiumTools from './Components/PremiumTools/PremiumTools'
import ReadyToTransform from './Components/ReadyToTransform/ReadyToTransform'
import TransparentPricing from './Components/TransparentPricing/TransparentPricing'

const fetchData = async() => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {

  const promiseData = fetchData()
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Counter></Counter>
    <Suspense fallback={<span className="loading loading-spinner loading-md"></span>}>
        <PremiumTools promiseData={promiseData}></PremiumTools>
    </Suspense>
    
    <GetStarted></GetStarted>
    <TransparentPricing></TransparentPricing>
    <ReadyToTransform></ReadyToTransform>

    <ToastContainer />

    </>
  )
}

export default App

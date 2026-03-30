import './App.css'
import Counter from './Components/Counter/Counter'
import GetStarted from './Components/GetStarted/GetStarted'
import Banner from './Components/NavBar/Banner/Banner'
import NavBar from './Components/NavBar/NavBar'
import ReadyToTransform from './Components/ReadyToTransform/ReadyToTransform'
import TransparentPricing from './Components/TransparentPricing/TransparentPricing'

function App() {
  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Counter></Counter>
    <GetStarted></GetStarted>
    <TransparentPricing></TransparentPricing>
    <ReadyToTransform></ReadyToTransform>

    </>
  )
}

export default App

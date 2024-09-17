import './App.scss'
import Navbar from './components/navbar/navbar'
// import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import SellCar from './components/sellCar/SellCar'

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      <SellCar />
      <Footer /> 
    </>
  )
}

export default App

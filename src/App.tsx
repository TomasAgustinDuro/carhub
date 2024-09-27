import './App.scss'
import Navbar from './components/navbar/navbar'
// import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import SellCar from './components/sellCar/SellCar'
import Preguntas from './components/nosotros/preguntas/preguntas'
import Dolar from './components/Dolar/Dolar'

function App() {
  return (
    <>
      <Navbar/>
      {/* <Home/> */}
      {/* <SellCar /> */}
      {/* <Preguntas /> */}
      <Dolar />
      <Footer /> 
    </>
  )
}

export default App

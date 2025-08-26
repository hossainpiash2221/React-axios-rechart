
import './App.css'
import LineChart from './Component/LineChart.jsx/LineChart'
import Navbar from './Component/Navbar/Navbar'
import Phone from './Component/Phones/Phone'
import PriceOptions from './Component/PriceOptions/PriceOptions'


function App() {


  return (
    <>
        <Navbar></Navbar>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <Phone></Phone>
    </>
  )
}

export default App

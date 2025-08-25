
import './App.css'
import LineChart from './Component/LineChart.jsx/LineChart'
import Navbar from './Component/Navbar/Navbar'
import PriceOptions from './Component/PriceOptions/PriceOptions'


function App() {


  return (
    <>
        <Navbar></Navbar>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
    </>
  )
}

export default App

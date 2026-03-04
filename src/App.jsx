
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Tickets from './Components/Tickets/Tickets'


function App() {
const fetchData = async() =>{
 const res = await fetch("/Tickets.json")
 return res.json()
}

const fetchPromise = fetchData()

  return (
    <>
    <Navbar></Navbar>
    <div className="pt-16">
    <Banner></Banner>
    <Suspense fallback={<p>Loading....</p>}>

    <Tickets fetchPromise={fetchPromise}></Tickets>
    </Suspense>
    </div>

    </>
  )
}

export default App

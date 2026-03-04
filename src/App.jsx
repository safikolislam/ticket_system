
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Tickets from './Components/Tickets/Tickets'

const fetchData = async() =>{
  const res = await fetch("/Tickets.json")
  return res.json()
}
  const fetchPromise = fetchData()

  function App() {
  const [task,setTask] = useState([])
  const [resolved,setResolved] = useState([])

  return (
    <>
    <Navbar></Navbar>
    <div className="pt-16">
    <Banner task={task} resolved={resolved}></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

    <Tickets resolved={resolved} setResolved={setResolved} task={task} setTask={setTask} fetchPromise={fetchPromise}></Tickets>
    </Suspense>
    </div>

    </>
  )
}

export default App

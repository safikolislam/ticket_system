
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Navbar from './Components/Navbar/Navbar'
import Tickets from './Components/Tickets/Tickets'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer/Footer'

const fetchData = async() =>{
  const res = await fetch("/Tickets.json")
  return res.json()
} 

  const fetchPromise = fetchData()
  function App() {
    const [task,setTask] = useState([])
    const [resolved,setResolved] = useState([]);
    const [allTickets,setAllTickets] = useState(null)
  const handleRemove=(id)=>{
    const remaining =allTickets.filter(ticket=>ticket.id !==id);
    setAllTickets(remaining)
  }
 
  return (
    <>
    <Navbar></Navbar>
    <div className="pt-16">
    <Banner task={task} resolved={resolved}></Banner>


<div className="bg-gray-100 w-full ">

  <div className="max-w-7xl lg:ml-50  justify-center px-4 sm:px-6 lg:px-8 py-6">
    <h2 className="text-3xl font-extrabold text-gray-800 ml-10 ">
      Customer Tickets
    </h2>
  </div>
</div>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>

    <Tickets handleRemove={handleRemove} allTickets={allTickets} setAllTickets={setAllTickets} resolved={resolved} setResolved={setResolved} task={task} setTask={setTask} fetchPromise={fetchPromise}></Tickets>
    </Suspense>
    </div>
    <Footer></Footer>
<ToastContainer autoClose={2000} ></ToastContainer>
    </>
  )
}

export default App

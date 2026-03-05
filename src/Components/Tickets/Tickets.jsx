
import { use, useEffect } from 'react';
import TicketCard from './TicketCard';
import { toast } from 'react-toastify';

const Tickets = ({ fetchPromise, setTask, task, resolved, setResolved,setAllTickets ,allTickets,handleRemove}) => {
const ticketData = use(fetchPromise);


useEffect(()=>{
 if(allTickets===null  ){
  setAllTickets(ticketData)

 }
},[allTickets,setAllTickets,ticketData])

if(allTickets ===null){
  return 
}

  const handleComplete = (id) => {
    const completedTask = task.find(item => item.id === id)
  
    if (completedTask) {
      setResolved([...resolved, completedTask])
      toast("Resolved The Task")
      const remainingTask = task.filter(t=>t.id !== id);
      setTask(remainingTask);
     
    }

  }

  return (


    <div className=" bg-gray-100 flex flex-col md:flex-row justify-between items-start px-30 lg:px-60 pt-20">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-10 w-full md:w-3/4 -mt-10">
        {allTickets.map(ticket =>
          <TicketCard key={ticket.id} allTickets={allTickets} handleRemove={handleRemove} resolved={resolved} setResolved={setResolved} task={task} setTask={setTask} ticket={ticket}></TicketCard>)}
      </div>
      {/* sidebar */}
      <div className="w-full md:w-1/4 sticky top-50 space-y-4 pt-12 mt-25 md:mt-10 ">
        <div>
          <h2 className="text-xl font-semibold -mt-38 mb-5 ">Task Status</h2>
          {task.length > 0 ?
            task.map((item,index) => (
              <div key={index} className="shadow-md w-70 h-auto mb-10 rounded-md bg-white p-5">
                <p className="mb-5">{item.title}</p>
                <button onClick={() =>{
                         handleComplete(item.id);
                         handleRemove(item.id)
                }
              } 
                className="w-full btn bg-green-500 text-white ">
                  Complete</button>
              </div>)) :
            <p className="text-gray-400">No card selected</p>
          }
        </div>
        {/* Resolved Task */}
        <div>
          <h2 className="font-semibold text-xl mb-5">Resolved Task</h2>
          {resolved.length > 0 ? resolved.map((r,index) => (<div key={index} className="w-70 h-auto p-5 shadow-md rounded-md mb-5 bg-white">
            <p className="font-semibold" >{r.title}</p>
          </div>)) : <p className="text-gray-400">No resolved tasks yet.</p>}

        </div>
      </div>
    </div>
  );
};

export default Tickets;
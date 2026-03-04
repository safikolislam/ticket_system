import React, { use } from 'react';
import TicketCard from './TicketCard';

const Tickets = ({ fetchPromise }) => {
    const ticketData = use(fetchPromise)
    console.log(ticketData);
    return (
  

     <div className="bg-gray-100 flex flex-col md:flex-row justify-between items-start px-30 lg:px-60 pt-20">
       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-10 w-full md:w-3/4">
         {ticketData.map(ticket =>
                     <TicketCard key={ticket.id} ticket={ticket}></TicketCard>)}
       </div>
       {/* sidebar */}
       <div className="w-full md:w-1/4 sticky top-4 space-y-4 pt-12 ">
        <div>
          <h2 className="text-xl font-semibold">Task Status</h2>
        {/* Task Status */}<p className="text-gray-400">Select a ticket to add to Task Status</p>
          </div>
        {/* Resolved Task */}
        <div>
          <h2 className="font-semibold text-xl">Resolved Task</h2>
          <p className="text-gray-400">No resolved tasks yet.</p>
          </div>
       </div>
     </div>
    );
};

export default Tickets;
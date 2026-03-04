import React from 'react';

import { FaCircle } from 'react-icons/fa';

const TicketCard = ({ticket}) => {
 console.log(ticket);
 const {title,description,status,id,priority,createdAt,
customer
} = ticket;
    const PriorityStyle={
      "LOW PRIORITY": "text-green-500",
      "MEDIUM PRIORITY":"text-yellow-500",
      "HIGH PRIORITY" : "text-red-500"
    }
    return (
       <div>
        <div className="card card-border bg-base-100 w-96 ">
  <div className="card-body">
    <div className="flex justify-between items-center">
     <h2 className="card-title">{title}</h2> 
     <span  className={`badge  px-2 py-1 whitespace-nowrap ${status === "Open"? "bg-green-400 text-green-700" : "bg-yellow-300 text-yellow-600"}`}><FaCircle className="text-current" ></FaCircle>{status}</span>
    </div>
    <p className="text-gray-400">{description}</p>
   <div className="grid grid-cols-4 text-gray-500">

        <p>#{id}</p>
        <p className={`${PriorityStyle[priority]}`}>{priority}</p>
        <p>{customer}</p>
        <p>{createdAt}</p>
   </div>
  </div>
</div>
       </div>
    );
};

export default TicketCard;
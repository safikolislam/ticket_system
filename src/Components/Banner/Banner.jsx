import React from 'react';
import bg1 from "../../assets/vector1.png"


const Banner = ({task,resolved}) => {
    return (
        <div className="top-0 flex flex-wrap gap-6 p-10 justify-center items-center bg-gray-100 text-white">

            <div className="bg-blue-500 rounded-md relative flex w-175 h-62 flex-col items-center justify-center overflow-hidden">
             <div className="flex justify-between items-center">
                <img src={bg1} alt="backgroun1" 
                className="absolute left-0 top-0 w-auto  h-full  object-cover pointer-events-none" />
                <img src={bg1} alt="backgroun1" className="absolute scale-x-[-1] h-full w-auto object-cover right-0 top-0" />

             </div>
                <div className="relative z-10 text-center">
                    <p className="text-lg font-medium">In Progress</p>
                    <h2 className="text-5xl font-bold">{task.length}</h2>
                </div>
            </div>



            <div className=" relative bg-linear-to-r from-[#56D066] via-[#2DB37E] to-[#0F7A6A] rounded-md flex w-175 h-62 flex-col items-center justify-center overflow-hidden">
                 <div className="flex justify-between items-center">
                <img src={bg1} alt="backgroun1" 
                className="absolute left-0 top-0 w-auto  h-full  object-cover" />
                <img src={bg1} alt="backgroun1" className=" absolute right-0 top-0 scale-x-[-1] h-full w-auto object-cover pointer-events-none" />

             </div>
              
                <div className="relative z-10 text-center">
                    <p className="text-lg font-medium">Resolved</p>
                    <h2 className="text-5xl font-bold">{resolved.length}</h2>
                </div>
            </div>

        </div>
    );
};

export default Banner;
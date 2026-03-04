import React from 'react';
import bg1 from "../../assets/vector1.png"


const Banner = () => {
    return (
        <div className="top-0 flex flex-wrap gap-6 p-10 justify-center items-center bg-gray-100 text-white">

            <div className="bg-blue-500 rounded-md relative flex w-[700px] h-[250px] flex-col items-center justify-center overflow-hidden">
                <img src={bg1} alt="backgroun1" className="absolute inset-0 h-full w-full object-contain" />
                <div className="relative z-10 text-center">
                    <p className="text-lg font-medium">In Progress</p>
                    <h2 className="text-5xl font-bold">0</h2>
                </div>
            </div>



            <div className=" relative bg-linear-to-r from-[#56D066] via-[#2DB37E] to-[#0F7A6A] rounded-md flex w-[700px] h-[250px] flex-col items-center justify-center overflow-hidden">
                <img src={bg1} alt="backgroun1" className="absolute inset-0 h-full w-full object-contain " />
                <div className="relative z-10 text-center">
                    <p className="text-lg font-medium">Resolve</p>
                    <h2 className="text-5xl font-bold">0</h2>
                </div>
            </div>

        </div>
    );
};

export default Banner;
import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
 
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const handleClick=()=>{
        setIsOpen(!isOpen)
    }
    return (
        <div className="fixed bg-white/10 backdrop-blur-sm  z-50 navbar  shadow-sm flex justify-between items-center">
            <div className="pl-10 md:pl-20 lg:pl-50">CS - Ticket System</div>
            <div >
                <ul className="md:flex gap-5 items-center  pr-20 lg:pr-50 hidden">
                    <li><a className="hover:underline transition duration-300 underline-offset-2" href="#">Home</a></li>
                    <li><a className="hover:underline transition duration-300 underline-offset-1" href="#">FAQ</a></li>
                
              
                    <li><a className="hover:underline transition duration-300 underline-offset-2" href="#">Changelog</a></li>
                    <li><a className="hover:underline transition duration-300 underline-offset-2" href="#">Blog</a></li>
                    <li><a  className="hover:underline transition duration-300 underline-offset-2" href="#">Download</a></li>
                     <button className="btn bg-linear-to-r from-purple-600 to-violet-300 text-white font-semibold">+ New Ticket</button>
                </ul>
            </div>
            {/* mobile responsive */}
            <div className="pr-10 pl-10 md:hidden ">
               {
             isOpen===false ?  <RxHamburgerMenu size={25} onClick={handleClick} /> : <RxCross1 size={25} onClick={handleClick} />
               } 
            </div>
            {
                isOpen && (
                         <ul className=" absolute w-50  top-15 right-5 bg-base-100 shadow-md flex flex-col items-center gap-4 py-6 z-50  ">
          <li><a>Home</a></li>
          <li><a>FAQ</a></li>
          <li><a>Changelog</a></li>
          <li><a>Blog</a></li>
          <li><a>Download</a></li>
          <button className="btn bg-linear-to-r from-purple-600 to-violet-400 text-white font-semibold">
            + New Ticket
          </button>
        </ul>
                )
            }
        </div>
    );
};

export default Navbar;
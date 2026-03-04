import React from 'react';

const Navbar = () => {
    return (
     <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className=" text-xl">CS — Ticket System</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
      <button className="btn bg-linear-to-r from-purple-600 to-violet-300 text-white font-semibold">+ New Ticket</button>
    </ul>
  </div>
</div>

    );
};

export default Navbar;
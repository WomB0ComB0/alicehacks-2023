import React from 'react';
import NavbarLinks from '../NavbarLinks';

const Navbar = () => (
  <div className="container flex items-center justify-between px-6">
    <a href="/" className="text-black typography dark:text-white h-fit w-fit">
      <img src="/assets/images/logo.png" alt="Logo" className='object-contain w-[150px] h-[75px]'/>
    </a>
    <NavbarLinks desktop />
  </div>
);

export default Navbar;

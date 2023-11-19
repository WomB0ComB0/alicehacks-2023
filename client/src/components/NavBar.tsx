'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const Logo = () => {
  const [width, setWidth] = useState(0);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, []);

  const [showButton, setShowButton] = useState(false);

  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavButton);
  }, []);

  return (
    <>
      <a href="/" style={{ display: showButton ? 'none' : 'block' }}>
        <img
          src="/assets/images/logo.png"
          alt="Logo"
          width={width < 1024 ? '150' : '250'}
          height={width < 1024 ? '45' : '74'}
          className="relative"
          loading="eager"
        />
      </a>
      <div
        style={{
          display: showButton ? 'block' : 'none',
        }}
      >
        <Button />
      </div>
    </>
  );
};
const Navbar = ({ toggle }: { toggle: () => void }) => (
  <>
    <div className="sticky top-0 w-full h-20 bg-emerald-800">
      <div className="container h-full px-4 mx-auto">
        <div className="flex items-center justify-between h-full">
          <Logo />
          <Button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
            </svg>
          </Button>
          <ul className="hidden text-white md:flex gap-x-6 ">
            <li>
              <a href="/about">
                <p>About Us</p>
              </a>
            </li>
            <li>
              <a href="/services">
                <p>Services</p>
              </a>
            </li>
            <li>
              <a href="/contacts">
                <p>Contacts</p>
              </a>
            </li>
          </ul>
          <div className="hidden md:block">
            <Button />
          </div>
        </div>
      </div>
    </div>
  </>
);

const Sidebar = ({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }): JSX.Element => (
  <>
    <div
      className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
      style={{
        opacity: `${isOpen ? '1' : '0'}`,
        top: ` ${isOpen ? '0' : '-100%'}`,
      }}
    >
      <Button className="absolute right-0 p-5" onClick={toggle}>
        {/* Close icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
          />
        </svg>
      </Button>

      <ul className="text-xl leading-relaxed text-center sidebar-nav">
        <li>
          <a href="/about" onClick={toggle}>
            <p>About Us</p>
          </a>
        </li>
        <li>
          <a href="/services" onClick={toggle}>
            <p>Services</p>
          </a>
        </li>
        <li>
          <a href="/contacts" onClick={toggle}>
            <p>Contacts</p>
          </a>
        </li>
      </ul>
    </div>
  </>
);
const NavBar = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default NavBar;

'use client';

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { ModeToggle } from '@/components/browser/dom-states';

type NavbarLinksProps = {
  desktop?: boolean;
};

const NavbarLinks = ({ desktop }: NavbarLinksProps) => {
  const [hasMounted, setHasMounted] = useState(false);
  const location = useLocation();
  // eslint-disable-next-line prefer-destructuring
  const pathname = location.pathname;

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div
      className={clsx({
        'items-center hidden lg:flex': desktop,
        'p-12 flex flex-col': !desktop,
      })}
    >
      <a
        href={`${pathname}/home`}
        className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black min-[2170px]:dark:text-white"
      >
        Home
      </a>
      <a
        href={`${pathname}/search`}
        className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black min-[2170px]:dark:text-white"
      >
        Search
      </a>
      <a
        href={`${pathname}/contact`}
        className="text-black mb-4 lg:mb-0 mr-0 lg:mr-4 dark:text-white lg:dark:text-black min-[2170px]:dark:text-white"
      >
        Contact
      </a>
      {hasMounted && <ModeToggle />}
    </div>
  );
};

export default NavbarLinks;

import React from 'react';
import { Navbar, NavbarContent, NavbarItem, Link } from '@heroui/react';

const Navigation = () => {
  return (
    <Navbar className="bg-gradient-to-r from-amber-400 to-slate-900 mb-14">
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link className="font-bold" aria-current="page" href="/">
            Table
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="font-bold" href="/list">
            List
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigation;

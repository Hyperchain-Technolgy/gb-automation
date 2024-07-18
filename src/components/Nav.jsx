import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";

const NavLinks = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="https://www.whatsapp.com/">Contact</NavLink>
    </>
  )
}

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav>
      <div className="hidden xs:flex flex-col">
        <NavLinks />
      </div>

      <div className="">
        <button onClick={toggleNavBar} className="size-10">
          {isOpen ? < XMarkIcon /> : <Bars3Icon />}
        </button>
      </div>

      {isOpen && (
        <div className="flex justify-center items-center flex-col h-screen">
          <NavLinks />
        </div>
      )}
    </nav>
  )
}

export default Nav
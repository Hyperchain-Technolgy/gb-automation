import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import PropTypes from 'prop-types';

const NavLinks = ({ className }) => {
  return (
    <>
      <NavLink to="/" className={className}>Home</NavLink>
      <NavLink to="/about" className={className}>About</NavLink>
      <NavLink to="https://www.whatsapp.com/" className={className}>Contact</NavLink>
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

      <div>
        <button onClick={toggleNavBar} className="size-10 relative z-10">
          {isOpen ? < XMarkIcon className="text-indigo-300" /> : <Bars3Icon className="text-indigo-300" />}
        </button>
      </div>

      <div className={`absolute flex justify-center items-center flex-col h-screen w-full top-0 left-0 bg-slate-900 transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <NavLinks className="text-2xl text-indigo-300 my-2" />
      </div>
    </nav>
  )
}

export default Nav

NavLinks.propTypes = {
  className: PropTypes.string,
};
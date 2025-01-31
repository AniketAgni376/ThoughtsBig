import React from "react";
import Logo from "../assets/photo.png";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-scroll";

function Navbar() {
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Service", id: "service" },
    { name: "About Us", id: "about-us" },
   { name: "Contact", id: "contact" },
  ];

  return (
    <div className="sticky bg-zinc-900/40 backdrop-blur-md top-0 z-[999] py-4 sm:py-5">
      <div className="container w-full font-NueueMontreal flex items-center justify-between">
        <div className="logo">
          <img src={Logo} className="w-[200px]" alt="thoughts big logo" />
        </div>
        <div className="links items-center gap-10 hidden md:flex">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70} // Adjust offset for sticky navbar
              className="text-md font-light capitalize whitespace-nowrap cursor-pointer hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <LuMenu className="md:hidden block text-3xl" />
      </div>
    </div>
  );
}

export default Navbar;
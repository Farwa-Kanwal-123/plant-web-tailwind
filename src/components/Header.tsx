'use client'
import React, { useState } from "react";
import Link from "next/link";
import { Righteous } from "next/font/google"
import { IoMdMenu, IoMdClose } from "react-icons/io";

const righteous = Righteous({subsets:['latin'],weight:"400"})



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <main>
      <div className="max-w-[1440px] lg:h-[60px] bg-green-800">
        <div className="px-6 md:px-16 py-3 flex justify-between items-center">
          {/* Logo */}
          <h1 className={`${righteous.className} text-2xl lg:text-3xl text-white`}>Green Store</h1>
          {/* Navbar */}
          <nav className="hidden md:flex space-x-10 text-white ">
            <Link href={"/"} className="hover:scale-105">Home</Link>
            <Link href={"/about"} className="hover:scale-105">About</Link>
            <Link href={"/Blogs"} className="hover:scale-105">Blogs</Link>
            <Link href={"/Contacts"} className="hover:scale-105">Contacts</Link>
          </nav>
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? <IoMdClose size={30} className="text-white"/> : <IoMdMenu size={30} className="text-white"/>}
            </button>
          </div>
        </div>
        {/* Mobile Navbar */}
        {isMenuOpen && (
          <div className="fixed top-0 right-0 h-full w-2/6 mt-[60px] z-50 transform transition-transform duration-300 md:hidden bg-gray-300 text-green-800">
            <nav className="flex flex-col items-center space-y-6 p-6 ">
              <Link href={"/"} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link href={"/about"} onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link href={"/Blogs"} onClick={() => setIsMenuOpen(false)}>
                Blogs
              </Link>
              <Link href={"/Contacts"} onClick={() => setIsMenuOpen(false)}>
                Contacts
              </Link>
            </nav>
          </div>
        )}
      </div>
    </main>
  );
};

export default Header;

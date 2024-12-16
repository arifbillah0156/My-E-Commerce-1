"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FixedNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-gray-950">MyShop</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/all_products">
              <span className="text-gray-950 hover:text-blue-600 NavText">
                সমস্ত প্রোডাক্ট
              </span>
            </Link>
            <div
              className="relative"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              //   onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-gray-950 hover:text-blue-600 focus:outline-none NavText">
                ক্যাটাগরি
              </button>
              {dropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white shadow-lg"
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <Link href="/category/electronics">
                    <span className="block px-4 py-2 text-gray-950 hover:bg-gray-100 hover:text-blue-600 NavTextDrop">
                      হিজাব/খিমার
                    </span>
                  </Link>
                  <Link href="/category/clothing">
                    <span className="block px-4 py-2 text-gray-950 hover:bg-gray-100 hover:text-blue-600 NavTextDrop">
                      জ্যাকেট
                    </span>
                  </Link>
                  <Link href="/category/home-appliances">
                    <span className="block px-4 py-2 text-gray-950 hover:bg-gray-100 hover:text-blue-600 NavTextDrop">
                      Home Appliances
                    </span>
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact">
              <span className="text-gray-950 hover:text-blue-600 NavText">
                Contact
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-950 hover:text-blue-600 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    menuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/">
              <span className="block text-gray-950 hover:text-blue-600">
                Home
              </span>
            </Link>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="block text-gray-950 hover:text-blue-600 w-full text-left"
              >
                Categories
              </button>
              {dropdownOpen && (
                <div className="mt-2 ml-4 space-y-1">
                  <Link href="/category/electronics">
                    <span className="block px-4 py-2 text-gray-950 hover:bg-gray-100 hover:text-blue-600">
                      Electronics
                    </span>
                  </Link>
                  <Link href="/category/clothing">
                    <span className="block px-4 py-2 text-gray-950 hover:bg-gray-100 hover:text-blue-600">
                      Clothing
                    </span>
                  </Link>
                  <Link href="/category/home-appliances">
                    <span className="block px-4 py-2 text-gray-950 hover:bg-gray-100 hover:text-blue-600">
                      Home Appliances
                    </span>
                  </Link>
                </div>
              )}
            </div>
            {/* <Link href="/about">
              <span className="block text-gray-950 hover:text-blue-600">
                About
              </span>
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default FixedNavbar;

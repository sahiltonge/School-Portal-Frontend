"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 font-bold text-xl">
          <Link href="/">
              <span className="cursor-pointer hover:text-gray-200">SchoolPortal</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/addSchool" className="hover:bg-blue-700 px-3 py-2 rounded">
              Add School
            </Link>
            <Link href="/showSchools" className="hover:bg-blue-700 px-3 py-2 rounded">
              Show Schools
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col space-y-1 pb-4">
            <Link href="/addSchool" className="hover:bg-blue-700 px-3 py-2 rounded">
              Add School
            </Link>
            <Link href="/showSchools" className="hover:bg-blue-700 px-3 py-2 rounded">
              Show Schools
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

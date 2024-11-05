// components/Header.js

"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-darkGrey text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo and Club Name */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.jpg" alt="Club Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-primaryOrange">Sportium</h1>
        </div>

        {/* Navigation Links for Large Screens */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/">Home</Link>
          <Link href="/matches">Matches</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Login Button for Large Screens */}
        <Link href="/login" className="hidden md:block bg-primaryOrange text-white py-2 px-4 rounded font-bold">
          Login
        </Link>

        {/* Hamburger Icon for Small Screens */}
        <button
          className="block md:hidden text-primaryOrange"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-darkGrey text-white space-y-4 p-4">
          <Link href="/" className="block">Home</Link>
          <Link href="/matches" className="block">Matches</Link>
          <Link href="/teams" className="block">Teams</Link>
          <Link href="/about" className="block">About Us</Link>
          <Link href="/contact" className="block">Contact</Link>
          <Link href="/login" className="block bg-primaryOrange text-white py-2 px-4 rounded font-bold">
            Login
          </Link>
        </nav>
      )}
    </header>
  );
}

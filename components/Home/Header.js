"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (event, targetId) => {
    event.preventDefault(); // Prevent the default link behavior
    if (window.location.pathname === "/" && targetId === "events") {
      // Already on the home page, scroll to the section
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    } else if (window.location.pathname === "/Contact-Us") {
      // If on the Contact Us page, do not navigate
      return;
    } else {
      // Navigate to the home page with the query parameter
      router.push(`/`); // You may want to handle scroll here differently
    }
  };

  return (
    <header className="bg-darkGrey text-white p-6 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Club Name */}
        <div className="flex items-center space-x-2 ml-4">
          <img src="/images/logo.jpg" alt="Club Logo" className="w-12 h-12" />
          <h1 className="text-2xl font-bold text-primaryOrange">Sportium</h1>
        </div>

        {/* Navigation Links for Large Screens */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/">Home</Link>
          <a href="#events" onClick={(e) => handleNavigation(e, "events")}>
            Events
          </a>
          <Link href="/teams">Teams</Link>
          <Link href="/about">About Us</Link>
          {router.pathname !== "/Contact-Us" && (
            <Link href="/Contact-Us" className="block">
              Contact Us
            </Link>
          )}
        </nav>

        {/* Login Button for Large Screens */}
        <Link
          href="/login"
          className="hidden md:block bg-darkGrey text-darkGrey py-2 px-4 rounded font-bold"
        >
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-darkGrey text-white space-y-4 p-4">
          <Link href="/" className="block">
            Home
          </Link>
          <a href="#events" onClick={(e) => handleNavigation(e, "events")} className="block mt-2">
            Events
          </a>

          <Link href="/teams" className="block">
            Teams
          </Link>
          <Link href="/about" className="block">
            About Us
          </Link>
          {router.pathname !== "/Contact-Us" && (
            <Link href="/Contact-Us" className="block">
              Contact Us
            </Link>
          )}
        </nav>
      )}
    </header>
  );
}

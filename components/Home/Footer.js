// components/Footer.js

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id= "foot" className="bg-darkGrey py-6">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Connect with Us</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryOrange hover:text-white flex items-center"
            >
              <FaFacebookF className="mr-2" />
              Facebook
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryOrange hover:text-white flex items-center"
            >
              <FaTwitter className="mr-2" />
              Twitter
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryOrange hover:text-white flex items-center"
            >
              <FaInstagram className="mr-2" />
              Instagram
            </a>
          </div>
        </div>
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <div className="flex justify-center space-x-6">
            <Link href="/about" className="text-primaryOrange hover:text-white">
              About Us
            </Link>
            <Link href="#events" className="text-primaryOrange hover:text-white">
              Events
            </Link>
            <Link href="#gallery" className="text-primaryOrange hover:text-white">
              Gallery
            </Link>
            <Link href="#foot" className="text-primaryOrange hover:text-white">
              Contact Us
            </Link>
          </div>
        </div>
        <p className="text-gray-300 text-sm">
          &copy; {new Date().getFullYear()} SSN Sportium. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

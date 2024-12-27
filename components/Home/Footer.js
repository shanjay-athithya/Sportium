// components/Footer.js

import Link from 'next/link';
import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer id= "contact" className="bg-darkGrey py-6">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Connect with Us</h4>
          <div className="flex justify-center space-x-6">
            <a
              href="https://chat.whatsapp.com/B9hg9wvlMTh87AeRomHK8U"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryOrange hover:text-white flex items-center"
            >
              <FaWhatsapp className="mr-2" />
              Whatsapp
            </a>
            <a
              href="https://www.linkedin.com/company/ssn-sportium/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primaryOrange hover:text-white flex items-center"
            >
              <FaLinkedin className="mr-2" />
              Linkedin
            </a>
            <a
              href="https://www.instagram.com/sportium_ssn?igsh=NmN3OGltc29oNWxj"
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

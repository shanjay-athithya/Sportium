'use client'; // Add this line

import { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Hamburger Icon from react-icons
import Link from 'next/link';
import '../globals.css';
import Head from '../../components/Team/head';
import Event from '../../components/Team/event';
import Market from '../../components/Team/market';
import Treasury from '../../components/Team/treasurer';
import Document from '../../components/Team/document';
import Technical from '../../components/Team/technical';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      
        

      {/* Team Sections */}
      
      <div id="head"><Head /></div>
      <div id="event"><Event /></div>
      <div id="market"><Market /></div>
      <div id="treasury"><Treasury /></div>
      <div id="documentation"><Document /></div>
      <div id="technical"><Technical /></div>
    </>
  );
}

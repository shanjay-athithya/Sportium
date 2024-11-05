// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-darkGrey text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-primaryOrange">Sports Club</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/matches">Matches</Link></li>
            <li><Link href="/teams">Teams</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Link href="/login" className="bg-primaryOrange text-white py-2 px-4 rounded font-bold">
            Login
        </Link>

      </div>
    </header>
  );
}

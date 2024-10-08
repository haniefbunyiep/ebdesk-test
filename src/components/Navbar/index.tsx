'use client';

import { usePathname } from 'next/navigation';
import NavbarComp from './Navbar';

export default function Navbar() {
  const pathname = usePathname();
  if (pathname.includes('signin')) return null;
  return <NavbarComp />;
}

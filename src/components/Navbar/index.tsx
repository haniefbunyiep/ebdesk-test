'use client';

import { usePathname } from 'next/navigation';
import NavbarComp from './Navbar';

export default function Navbar() {
  const pages = ['/signin', '/admin/'];
  const pathname = usePathname();

  const isExcludePage = pages.some((pages) => pathname.includes(pages));

  if (isExcludePage) return null;

  return <NavbarComp />;
}

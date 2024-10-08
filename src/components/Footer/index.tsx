'use client';
import { usePathname } from 'next/navigation';
import FooterComp from './Footer';

export default function Footer() {
  const pathname = usePathname();

  if (pathname.includes('/signin')) return null;
  return <FooterComp />;
}

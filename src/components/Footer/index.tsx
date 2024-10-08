'use client';
import { usePathname } from 'next/navigation';
import FooterComp from './Footer';

export default function Footer() {
  const pages = ['/signin', '/404'];
  const pathname = usePathname();

  const isExcludedPage = pages.some((page) => pathname.includes(page));

  if (isExcludedPage) return null;

  return <FooterComp />;
}

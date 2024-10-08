'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';

interface NavbarContent {
  name: string;
  url?: string;
}

const navbarContent: NavbarContent[] = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Product',
  },
  {
    name: 'Blog',
  },
  {
    name: 'Pricing',
  },
  {
    name: 'Contact',
  },
  {
    name: 'About Us',
  },
];

export default function NavbarComp() {
  const pathname = usePathname();

  return (
    <header className='p-4'>
      <div className='container mx-auto flex h-16 justify-between'>
        <a
          rel='noopener noreferrer'
          href='/'
          aria-label='Back to homepage'
          className='flex items-center p-2'
        >
          <img src='Logo/Logo.svg' alt='logo' />
        </a>
        <ul className='hidden items-stretch space-x-3 lg:flex'>
          {navbarContent.map((content) => (
            <Link
              href={!content.url ? '#' : content.url}
              key={content.name}
              className={`flex items-center justify-center`}
            >
              <li>
                <Button
                  variant={'link'}
                  className={`text-[16px] ${
                    pathname == content.url && 'font-bold'
                  }`}
                >
                  {content.name}
                </Button>
              </li>
            </Link>
          ))}
        </ul>
        <div className='hidden flex-shrink-0 items-center gap-3 lg:flex'>
          <Link href={'/signin'}>
            <Button
              variant={'ghost'}
              className='hover:bg-primary_blue rounded-full border border-white text-[16px] font-bold hover:text-white'
            >
              Sign In
            </Button>
          </Link>
          <Button className='border-primary_blue text-primary_blue hover:bg-primary_blue flex rounded-full border bg-transparent px-[40px] py-[13px] text-[16px] font-bold hover:text-white'>
            Sign Up
          </Button>
        </div>
        <button className='p-4 lg:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            className='h-6 w-6 dark:text-gray-800'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

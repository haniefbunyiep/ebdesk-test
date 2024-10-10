'use client';

import Link from 'next/link';
import { Button } from '../ui/button';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { useGetUserAuth } from '@/helpers/login/hooks/useGetUserAuth';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setLoginData, logout } from '@/store/user';
import { useRefreshToken } from '@/helpers/login/hooks/useRefreshToken';

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
    url: '/aboutus',
  },
];

export default function NavbarComp() {
  const userLoginData = useSelector((state: RootState) => state.user.userData);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setLoginData(null));
    alert('Logout Success');
    window.location.reload();
  };

  const isAboutUs = pathname === '/aboutus';

  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (scrollY < currentScrollY && currentScrollY > 100) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setScrollY(currentScrollY);
  };

  const { userAuthData, userAuthSuccess, userAuthError } = useGetUserAuth();
  const { refreshTokenMutation } = useRefreshToken();

  useEffect(() => {
    if (!userLoginData) {
      if (userAuthSuccess) {
        const userData = userAuthData?.data;
        dispatch(
          setLoginData({
            name: `${userData?.firstName} ${userData?.lastName}`,
            email: userData?.email,
          }),
        );
      } else if (userAuthError) {
        refreshTokenMutation();
      }
    }
  }, [userLoginData, userAuthSuccess, userAuthError, userAuthData, dispatch]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-screen justify-between p-10 px-10 transition-transform duration-300 ${
        isAboutUs ? 'fixed bg-transparent' : ''
      } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className='container mx-auto flex h-16 justify-between'>
        <a
          rel='noopener noreferrer'
          href='/'
          aria-label='Back to homepage'
          className='flex items-center p-2'
        >
          {isAboutUs && scrollY <= 600 ? (
            <img src='Logo/LogoWhite.svg' alt='logo' />
          ) : (
            <img src='Logo/Logo.svg' alt='logo' />
          )}
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
                  } ${isAboutUs && scrollY <= 600 ? 'text-white' : 'text-black'}`}
                >
                  {content.name}
                </Button>
              </li>
            </Link>
          ))}
        </ul>
        <div className='hidden flex-shrink-0 items-center gap-3 lg:flex'>
          {userLoginData == null ? (
            <>
              <Link href={'/signin'}>
                <Button
                  variant={'ghost'}
                  className={`${isAboutUs && scrollY <= 600 ? 'rounded-full bg-transparent text-[16px] font-bold text-white' : 'hover:bg-primary_blue rounded-full border border-white text-[16px] font-bold text-black hover:text-white'} `}
                >
                  Sign In
                </Button>
              </Link>
              <Button className='border-primary_blue text-primary_blue hover:bg-primary_blue z-50 flex rounded-full border bg-white px-[40px] py-[13px] text-[16px] font-bold hover:text-white'>
                Sign Up
              </Button>
            </>
          ) : (
            <>
              <Link href={'/admin/dashboard'}>
                <Button
                  variant={'ghost'}
                  className={`${isAboutUs && scrollY <= 600 ? 'rounded-full bg-transparent text-[16px] font-bold text-white' : 'hover:bg-primary_blue rounded-full border border-white text-[16px] font-bold text-black hover:text-white'} `}
                >
                  Dashboard
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                className='border-primary_blue text-primary_blue hover:bg-primary_blue z-50 flex rounded-full border bg-white px-[40px] py-[13px] text-[16px] font-bold hover:text-white'
              >
                Logout
              </Button>
            </>
          )}
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

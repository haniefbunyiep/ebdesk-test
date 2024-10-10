'use client';

import { LogOut, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useEffect, useRef } from 'react';
import { useGetUserAuth } from '@/helpers/login/hooks/useGetUserAuth';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { setLoginData, logout } from '@/store/user';
import { useRefreshToken } from '@/helpers/login/hooks/useRefreshToken';
import { useRouter } from 'next/navigation';

export default function AdminTopBar() {
  const userLoginData = useSelector((state: RootState) => state.user.userData);
  const dispatch = useDispatch();
  const navigate = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setLoginData(null));
    alert('Logout Success');
    navigate.push('/');
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

  return (
    <div className='flex items-center justify-between bg-white px-7 py-5'>
      <div>
        <img src='/AdminTopBar/burger.svg' alt='burger' />
      </div>
      <div className='flex items-center justify-between gap-3'>
        <div>
          <img src='/AdminTopBar/toggle.svg' alt='toggle' />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className='scale-105'>
              <Button className='flex h-10 w-fit items-center justify-between gap-2 bg-white p-0 hover:bg-soft_gray'>
                <img src='/AdminTopBar/user.svg' alt='user' />
                <div className='text-dark_gray'>{userLoginData?.name}</div>
                <MdKeyboardArrowDown size={25} className='text-black' />
              </Button>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <Link href='/dashboard/general'>
              <DropdownMenuItem>
                <User className='mr-2 h-4 w-4' />
                <span>Profile</span>
              </DropdownMenuItem>
            </Link>
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

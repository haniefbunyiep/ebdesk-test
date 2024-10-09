import { LogOut, User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Link from 'next/link';
import { Button } from '../ui/button';
import { MdKeyboardArrowDown } from 'react-icons/md';

export default function AdminTopBar() {
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
                <div className='text-dark_gray'>User.Inc</div>
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
            <DropdownMenuItem>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

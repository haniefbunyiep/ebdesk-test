import AdminSideBar from '@/components/Admin/SideBar';
import AdminTopBar from '@/components/Admin/TopBar';
import { Input } from '@/components/ui/input';
import { LuSearch } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PiDotsThreeBold } from 'react-icons/pi';

export default function UserManagement() {
  return (
    <div className='flex h-[100vh]'>
      <AdminSideBar />
      <div className='bg-broken_white flex w-full flex-grow flex-col justify-between'>
        <AdminTopBar />
        <div className='flex h-full w-full flex-col items-center justify-center p-5'>
          <div className='flex h-full w-full flex-col items-center justify-between'>
            <div className='flex h-[5%] w-full items-center justify-between gap-3'>
              <span className='text-[20px] font-bold'>USER MANAGEMENT</span>
              <span className='text-regent_gray'>
                Logoipsum /Usermanagement
              </span>
            </div>
            <div className='flex h-[10%] w-full items-center justify-between gap-3'>
              <div className='relative flex w-60 items-center'>
                <Input
                  type='email'
                  placeholder='Search User Management'
                  className='pl-10'
                />
                <div className='absolute left-3 cursor-pointer pr-2'>
                  <LuSearch size={20} />
                </div>
              </div>
              <Button className='bg-primary_blue hover:text-primary_blue hover:border-primary_blue border px-6 font-bold text-white hover:bg-white'>
                Add User
              </Button>
            </div>
            <div className='flex h-[90%] w-full flex-col justify-between gap-5'>
              <Table className='border-separate border-spacing-y-4 space-y-4'>
                <TableHeader>
                  <TableRow className='border-white bg-white text-black hover:bg-white'>
                    <TableHead className='w-1/6 text-start font-bold text-black'>
                      Name
                    </TableHead>
                    <TableHead className='w-1/6 text-start font-bold text-black'>
                      Username
                    </TableHead>
                    <TableHead className='w-1/6 text-start font-bold text-black'>
                      Email
                    </TableHead>
                    <TableHead className='w-1/6 text-start font-bold text-black'>
                      Gender
                    </TableHead>
                    <TableHead className='w-1/6 text-start font-bold text-black'>
                      Last Update
                    </TableHead>
                    <TableHead className='w-1/6 text-center font-bold text-black'>
                      Action
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className='space-y-4'>
                  <TableRow className='border border-white bg-white hover:bg-white'>
                    <TableCell className='flex items-center justify-start gap-4 bg-red-200'>
                      <img
                        className='rounded-full'
                        src='/AdminTopBar/user.svg'
                        alt=''
                      />
                      Kristin Watson
                    </TableCell>
                    <TableCell className='text-start'>@kristinwatson</TableCell>
                    <TableCell className='text-start'>
                      kristinwatson@gmail.com
                    </TableCell>
                    <TableCell className='text-start'>Female</TableCell>
                    <TableCell className='text-start'>
                      Jun 15, 08:30:04
                    </TableCell>
                    <TableCell className='flex items-center justify-center text-center'>
                      <PiDotsThreeBold
                        size={30}
                        className='hover:bg-blue-300'
                      />
                    </TableCell>
                  </TableRow>
                  {/* <TableRow className='border border-white bg-white hover:bg-white'>
                    <TableCell className='text-center'>INV001</TableCell>
                    <TableCell className='text-center'>INV001</TableCell>
                    <TableCell className='text-center'>INV001</TableCell>
                    <TableCell className='text-center'>INV001</TableCell>
                    <TableCell className='text-center'>INV001</TableCell>
                    <TableCell className='text-center'>INV001</TableCell>
                  </TableRow> */}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

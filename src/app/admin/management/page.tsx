'use client';

import { useState, useEffect } from 'react';
import AdminSideBar from '@/components/Admin/SideBar';
import AdminTopBar from '@/components/Admin/TopBar';
import { Input } from '@/components/ui/input';
import { LuSearch } from 'react-icons/lu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PiDotsThreeBold } from 'react-icons/pi';
import { useGetAllUser } from '@/helpers/user-management/hooks/useGetAllUser';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { MdOutlineBackspace, MdOutlineEdit } from 'react-icons/md';
import AdminModal from '@/components/Admin/Modal';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { MdDelete } from 'react-icons/md';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useDeleteUser } from '@/helpers/user-management/hooks/useDeleteUser';
import EditUser from '@/components/Admin/Edit';

export default function UserManagement() {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [search, setSearch] = useState('');
  const [skip, setSkip] = useState(0);

  const { allUserData, refetch } = useGetAllUser(
    skip.toString(),
    limit.toString(),
    search,
  );
  const userData = allUserData?.data?.users;
  const totalPage = Math.ceil(allUserData?.data?.total / limit);

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = () => {
    setSkip((currentPage - 1) * limit);

    refetch();
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
      setSkip((currentPage - 2) * limit);
      refetch();
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage((prev) => prev + 1);
      setSkip(currentPage * limit);
      refetch();
    }
  };

  const { isSuccess, mutate } = useDeleteUser();

  useEffect(() => {
    refetch();
  }, [skip, limit]);

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
              <div className='relative flex w-[250px] items-center'>
                <Input
                  type='text'
                  placeholder='Search User Management'
                  className='px-10'
                  onChange={handleSearchChange}
                />
                <div className='absolute left-3 cursor-pointer pr-2'>
                  <LuSearch size={20} onClick={handleSearchClick} />{' '}
                </div>
                {search ? (
                  <div className='absolute right-3 cursor-pointer pl-2'>
                    <MdOutlineBackspace
                      size={20}
                      onClick={() => window.location.reload()}
                    />{' '}
                  </div>
                ) : null}
              </div>
              <div>
                <AdminModal />
              </div>
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
                  {userData?.map((users: any) => {
                    return (
                      <TableRow
                        key={users?.id}
                        className='border border-white bg-white hover:bg-white'
                      >
                        <TableCell className='flex items-center justify-start gap-4'>
                          <img
                            className='h-[40px] w-[40px] rounded-full'
                            src={users?.image}
                            alt={users?.firstName}
                          />
                          {`${users?.firstName} ${users?.lastName}`}
                        </TableCell>
                        <TableCell className='text-start'>
                          {`@${users.username}`}
                        </TableCell>
                        <TableCell className='text-start'>
                          {users.email}
                        </TableCell>
                        <TableCell className='text-start'>
                          {users.gender}
                        </TableCell>
                        <TableCell className='text-start'>
                          Jun 15, 08:30:04
                        </TableCell>
                        <TableCell className='flex items-center justify-center text-center'>
                          <Popover>
                            <PopoverTrigger>
                              <PiDotsThreeBold
                                size={30}
                                className='hover:bg-blue-300'
                              />
                            </PopoverTrigger>
                            <PopoverContent
                              side='left'
                              className='flex w-fit flex-col items-start justify-between gap-2'
                            >
                              <div className='w-full'>
                                <EditUser id={users.id} />
                              </div>
                              <div>
                                <AlertDialog>
                                  <AlertDialogTrigger className='flex w-full items-center gap-2 rounded-md p-2 hover:bg-soft_gray'>
                                    <MdDelete /> Delete
                                  </AlertDialogTrigger>
                                  <AlertDialogContent>
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>
                                        {`Are you absolutely sure want delete ${users.firstName} ${users.lastName}?`}
                                      </AlertDialogTitle>
                                      <AlertDialogDescription>
                                        This action cannot be undone. This will
                                        permanently delete your account and
                                        remove your data from our servers.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel className='border border-red-500 bg-red-500 font-bold text-white hover:border-white hover:bg-red-400 hover:text-white'>
                                        Cancel
                                      </AlertDialogCancel>
                                      <AlertDialogAction
                                        onClick={() => {
                                          mutate({ userId: users.id });
                                          setTimeout(() => {
                                            if (isSuccess)
                                              alert(
                                                `${users.firstName} ${users.lastName} has been delete`,
                                              );
                                          }, 1000);
                                        }}
                                        className='bg-primary_blue border-primary_blue hover:text-primary_blue border font-bold text-white hover:bg-white'
                                      >
                                        Continue
                                      </AlertDialogAction>
                                    </AlertDialogFooter>
                                  </AlertDialogContent>
                                </AlertDialog>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </div>
            <div className='flex w-full items-center justify-between'>
              <div>{`Showing ${allUserData?.data?.limit + allUserData?.data?.skip} of ${allUserData?.data?.total} User`}</div>
              <div className='rounded-lg bg-white'>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem onClick={handlePreviousPage}>
                      <PaginationPrevious />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href='#'>{`${currentPage} / ${totalPage}`}</PaginationLink>
                    </PaginationItem>
                    <PaginationItem onClick={handleNextPage}>
                      <PaginationNext />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

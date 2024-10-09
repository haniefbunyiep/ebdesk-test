import Link from 'next/link';
import AdminSideBar from '@/components/Admin/SideBar';
import AdminTopBar from '@/components/Admin/TopBar';

export default function AdminDashboard() {
  return (
    <div className='flex h-[100vh]'>
      <AdminSideBar />
      <div className='flex w-full flex-grow flex-col justify-between bg-soft_gray'>
        <AdminTopBar />
        <div className='flex h-full w-full flex-col items-center justify-center'>
          test
        </div>
      </div>
    </div>
  );
}

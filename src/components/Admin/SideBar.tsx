'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PathnameSlice } from '@/utils';

interface Content {
  name: string;
  url: string;
  img: string;
}

interface SideBarContent {
  key: string;
  content: Content[];
}

const sideBarContent: SideBarContent[] = [
  {
    key: 'DATA',
    content: [
      {
        name: 'Visualization',
        img: '/AdminSideBar/visualization.svg',
        url: '#',
      },
      { name: 'Case', img: '/AdminSideBar/case.svg', url: '#' },
      { name: 'Data Set', img: '/AdminSideBar/dataSet.svg', url: '#' },
      {
        name: 'Data Source',
        img: '/AdminSideBar/dataSource.svg',
        url: '/admin/management',
      },
      { name: 'Connection', img: '/AdminSideBar/connection.svg', url: '#' },
    ],
  },
  {
    key: 'ASSETS',
    content: [
      { name: 'Icon', img: '/AdminSideBar/icon.svg', url: '#' },
      { name: 'Image', img: '/AdminSideBar/image.svg', url: '#' },
    ],
  },
  {
    key: 'AUTHORIZATION',
    content: [
      { name: 'Account', img: '/AdminSideBar/account.svg', url: '#' },
      { name: 'Role', img: '/AdminSideBar/role.svg', url: '#' },
      { name: 'Workspace', img: '/AdminSideBar/workspace.svg', url: '#' },
    ],
  },
];

export default function AdminSideBar() {
  const pathname = usePathname();

  return (
    <div className='bg-dark_blue w-[30vh] px-7 py-10 font-bold'>
      <Link href={'/'}>
        <img src='/Logo/LogoAdminDashboard.svg' alt='logo' />
      </Link>
      <div className='flex flex-col gap-7'>
        <Link
          href={'/admin/dashboard'}
          className={`text-regent_gray mt-10 flex items-center gap-3 hover:underline ${pathname == '/admin/dashboard' ? 'underline' : ''}`}
        >
          <img src='/AdminSideBar/dashboard.svg' alt='test' />
          Dashboard
        </Link>
        {sideBarContent.map((SideBarcontent) => (
          <div key={SideBarcontent.key} className='flex flex-col gap-6'>
            <div className='text-regent_gray'>{SideBarcontent.key}</div>
            <ul className='text-regent_gray space-y-5'>
              {SideBarcontent.content.map((contentList, index) => (
                <li key={index}>
                  <Link
                    href={!contentList.url ? '#' : contentList.url}
                    className={`flex items-center gap-3 hover:underline ${pathname == contentList.url ? 'underline' : ''}`}
                  >
                    <img src={contentList.img} alt={contentList.name} />
                    {contentList.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

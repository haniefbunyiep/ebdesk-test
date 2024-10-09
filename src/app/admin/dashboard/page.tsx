import Link from 'next/link';
import AdminSideBar from '@/components/Admin/SideBar';
import AdminTopBar from '@/components/Admin/TopBar';
import { GrHomeRounded } from 'react-icons/gr';
import { MdKeyboardArrowRight } from 'react-icons/md';
import LineChart from '@/components/Admin/Dashboard/LineChart';
import BarChart from '@/components/Admin/Dashboard/BarChart';
import PieChart from '@/components/Admin/Dashboard/PieChart';
import Radar from '@/components/Admin/Dashboard/Radar';
import Population from '@/components/Admin/Dashboard/Population';

const PieChartPenduduk = {
  title: 'Jumlah Penduduk Tiap Dusun',
  data: [
    { value: 1048, name: 'Dusun 1' },
    { value: 735, name: 'Dusun 2' },
    { value: 580, name: 'Dusun 3' },
    { value: 484, name: 'Dusun 4' },
    { value: 300, name: 'Dusun 5' },
  ],
};

const PieChartJumlahKK = {
  title: 'Jumlah KK Tiap Dusun',
  data: [
    { value: 1048, name: 'Dusun 1' },
    { value: 735, name: 'Dusun 2' },
    { value: 580, name: 'Dusun 3' },
    { value: 484, name: 'Dusun 4' },
  ],
};

const PieChartJumlahPrasarana = {
  title: 'Jumlah Prasarana Umum',
  data: [
    { value: 20, name: 'Balai Pertemuan' },
    { value: 10, name: 'Sumur Desa' },
    { value: 15, name: 'Olahraga' },
    { value: 5, name: 'Pasar Desa' },
  ],
};

const JumlahPenduduk2022 = {
  category: ['Dusun 1', 'Dusun 2', 'Dusun 3', 'Dusun 4', 'Dusun 5', 'Dusun 6'],
  dataSeries: [
    {
      name: 'Pria',
      type: 'bar',
      data: [18203, 23489, 29034, 104970, 131744, 630230],
    },
    {
      name: 'Wanita',
      type: 'bar',
      data: [19325, 23438, 31000, 121594, 134141, 681807],
    },
  ],
};

export default function AdminDashboard() {
  return (
    <div className='flex h-[100vh]'>
      <AdminSideBar />
      <div className='bg-broken_white flex w-full flex-grow flex-col justify-between'>
        <AdminTopBar />
        <div className='flex h-full w-full flex-col items-center justify-center p-5'>
          <div className='flex h-full w-full flex-col items-center justify-between'>
            <div className='text-regent_gray flex h-[5%] w-full items-center justify-start gap-3'>
              <GrHomeRounded /> <MdKeyboardArrowRight size={20} />{' '}
              <span className='text-dark_blue'>Statistik</span>{' '}
              <MdKeyboardArrowRight size={20} /> Wilayah
            </div>
            <div className='flex h-[95%] w-full flex-col justify-between gap-5'>
              <div className='grid h-1/3 grid-cols-2 gap-3'>
                <LineChart height='250px' />
                <BarChart height='250px' />
              </div>
              <div className='grid h-1/3 grid-cols-3 gap-3'>
                <PieChart
                  height='250px'
                  data={PieChartPenduduk.data}
                  title={PieChartPenduduk.title}
                />
                <Radar height='250px' />
                <PieChart
                  height='250px'
                  data={PieChartJumlahKK.data}
                  title={PieChartJumlahKK.title}
                />
              </div>
              <div className='grid h-1/3 grid-cols-3 gap-3'>
                <PieChart
                  height='250px'
                  data={PieChartJumlahPrasarana.data}
                  title={PieChartJumlahPrasarana.title}
                />
                <Population
                  classname='col-span-2'
                  height='Jumlah Penduduk 2022'
                  dataSeries={JumlahPenduduk2022.dataSeries}
                  categoryType={JumlahPenduduk2022.category}
                  title='Jumlah Penduduk Berdasarkan Gender 2022'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

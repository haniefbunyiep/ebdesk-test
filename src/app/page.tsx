import Hero from '@/components/Home/Hero';
import ChooseUs from '@/components/Home/ChooseUs';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-grow flex-col items-center gap-24 p-24'>
      <Hero />
      <ChooseUs />
    </div>
  );
}

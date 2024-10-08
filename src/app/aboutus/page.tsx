import HeroAboutUs from '@/components/AboutUs/Hero';
import Quote from '@/components/AboutUs/Quote';
import Advisor from '@/components/AboutUs/Advisor';
import Testimoni from '@/components/AboutUs/Testimoni';
import Subscribe from '@/components/AboutUs/Subsscribe';

export default function AboutUs() {
  return (
    <div className='space-y-32 pb-20'>
      <HeroAboutUs />
      <Quote />
      <Advisor />
      <Testimoni />
      <Subscribe />
    </div>
  );
}

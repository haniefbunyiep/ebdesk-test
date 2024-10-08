import Hero from '@/components/Home/Hero';
import ChooseUs from '@/components/Home/ChooseUs';
import AppOverview from '@/components/Home/AppOverview';
import HowItWorks from '@/components/Home/HowItWorks';
import PlansAndPricing from '@/components/Home/PlansAndPricing';
import FAQ from '@/components/Home/FAQ';

export default function Home() {
  return (
    <div className='flex min-h-screen flex-grow flex-col items-center gap-48 py-24'>
      <Hero />
      <ChooseUs />
      <AppOverview />
      <HowItWorks />
      <PlansAndPricing />
      <FAQ />
    </div>
  );
}

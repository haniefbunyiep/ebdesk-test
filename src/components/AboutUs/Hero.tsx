import { Button } from '../ui/button';

export default function HeroAboutUs() {
  return (
    <div className='bg-primary_blue flex flex-col items-center justify-center text-white'>
      <div>
        <img src='AboutUs/Vector.svg' alt='Vector' />
      </div>
      <div className='absolute flex flex-col items-center justify-center gap-5'>
        <div className='flex items-center justify-center text-[60px] font-bold'>
          <h1>About Us</h1>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 text-center'>
          <p>
            A small company offering data-driven solutions for campaign
            effectiveness
          </p>
          <p>
            using spatial data and detailed analysis of target audience
            (voters). Use
          </p>
          <p>
            technology that unites spatial data science and political science.
          </p>
        </div>
        <Button className='border-primary_blue text-primary_blue hover:bg-primary_blue rounded-full border bg-white px-10 py-6 font-bold hover:border-white hover:text-white'>
          Learn More
        </Button>
      </div>
    </div>
  );
}

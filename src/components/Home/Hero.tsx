import { Button } from '../ui/button';

export default function Hero() {
  return (
    <div className='flex gap-3'>
      <div className='flex flex-col gap-5'>
        <div className='text-[60px]'>
          <h1 className='font-semibold'>Observe Your</h1>
          <h1 className='font-bold'>Power</h1>
        </div>
        <div className='text-regent_gray flex flex-col gap-1'>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on
          </p>
          <p>mobile and online for everyone</p>
        </div>
        <Button className='bg-primary_blue hover:bg-regent_gray shadow-primary_blue hover:shadow-regent_gray w-fit rounded-full px-[50px] py-[15px] font-bold text-white shadow-md'>
          See Demo
        </Button>
      </div>
      <div>
        <img src='Hero/hero.svg' alt='hero' />
      </div>
    </div>
  );
}

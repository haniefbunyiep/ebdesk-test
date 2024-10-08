import { Button } from '../ui/button';

export default function AppOverview() {
  return (
    <div className='bg-primary_blue relative flex h-fit w-full flex-col items-center justify-center gap-24 p-10 pb-36 text-white'>
      <div className='absolute right-3 top-3'>
        <img src='element.svg' alt='element' />
      </div>
      <div className='flex w-full items-center justify-center gap-56'>
        <div className='relative'>
          <img src='AppOverview/appOverview1Vector.svg' alt='vector' />
          <div className='absolute -right-20 -top-20 h-[440px] w-[345px]'>
            <img src='/Rectangle236.png' alt='AppOverview1' />
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className='text-[35px] font-bold'>App Overview 1</h1>
          <div>
            <p>Advanced spatial analysis to understand where and why</p>
            <p>things happen, identify the target constituency, and optimize</p>
            <p>the campaign.</p>
          </div>
          <Button className='bg-primary_blue hover:text-primary_blue w-fit rounded-full border border-white px-8 py-5 font-bold text-white hover:bg-white'>
            Learn More
          </Button>
        </div>
      </div>
      <div className='flex w-full items-center justify-center gap-56'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-[35px] font-bold'>App Overview 2</h1>
          <div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
            <p>do amet sint. Velit officia consequat duis enim velit mollit.</p>
            <p>Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <Button className='bg-primary_blue hover:text-primary_blue w-fit rounded-full border border-white px-8 py-5 font-bold text-white hover:bg-white'>
            Learn More
          </Button>
        </div>
        <div className='relative flex items-center justify-center'>
          <div className='absolute z-0'>
            <img src='AppOverview/appOverview2Vector.svg' alt='vector' />
          </div>
          <div className='z-10'>
            <img src='AppOverview/appOverview2Element.svg' alt='vector' />
          </div>
        </div>
      </div>
      <div className='flex w-full items-center justify-center gap-56 py-40'>
        <div className='relative flex items-center justify-center'>
          <div className='absolute z-0'>
            <img src='AppOverview/appOverview3Vector.svg' alt='vector' />
          </div>
          <div className='z-10'>
            <img src='AppOverview/appOverview3Element.svg' alt='element' />
          </div>
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className='text-[35px] font-bold'>App Overview 3</h1>
          <div>
            <p>Advanced spatial analysis to understand where and why</p>
            <p>things happen, identify the target constituency, and optimize</p>
            <p>the campaign.</p>
          </div>
          <Button className='bg-primary_blue hover:text-primary_blue w-fit rounded-full border border-white px-8 py-5 font-bold text-white hover:bg-white'>
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

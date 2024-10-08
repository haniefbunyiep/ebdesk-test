import { Button } from '../ui/button';

export default function HowItWorks() {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className='text-[35px] font-bold'>How it works for you?</h1>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-dark_gray'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          </p>
          <p className='text-dark_gray'>
            do eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <p className='text-dark_gray'>aliqua. Ut enim ad minim veniam.</p>
        </div>
        <Button className='bg-primary_blue hover:bg-regent_gray shadow-primary_blue hover:shadow-regent_gray w-fit rounded-full px-[50px] py-[15px] font-bold text-white shadow-md'>
          See Demo
        </Button>
      </div>
      <div className='grid grid-cols-2 gap-10 p-5'>
        <div className='flex min-w-[300px] flex-col items-center justify-start gap-10 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-start'>
            <img src='HowItWorks/geographic.svg' alt='rafiki' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-center text-[24px] font-bold'>
              Geographic Segmentation
            </h1>
            <div className='flex flex-col text-center'>
              <p className='text-dark_gray'>
                Consist of creating differend groups of
              </p>
              <p className='text-dark_gray'>customers based on geographic</p>
              <p className='text-dark_gray'>boundaries.</p>
            </div>
          </div>
        </div>
        <div className='flex min-w-[300px] flex-col items-center justify-start gap-10 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-start'>
            <img src='HowItWorks/demographic.svg' alt='rafiki' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-center text-[24px] font-bold'>
              Demographic Segmentation
            </h1>
            <div className='flex flex-col text-center'>
              <p className='text-dark_gray'>
                Consist of dividing the market through different
              </p>
              <p className='text-dark_gray'>
                variables such as age, gender, income, etc
              </p>
            </div>
          </div>
        </div>
        <div className='flex min-w-[300px] flex-col items-center justify-start gap-10 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-start'>
            <img src='HowItWorks/psycographic.svg' alt='rafiki' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-[24px] font-bold'>
              Psychograpich Segmentation
            </h1>
            <div className='flex flex-col text-center'>
              <p className='text-dark_gray'>
                Consist of creating differend groups of
              </p>
              <p className='text-dark_gray'>customers based on geographic </p>
              <p className='text-dark_gray'>boundaries.</p>
            </div>
          </div>
        </div>
        <div className='flex min-w-[300px] flex-col items-center justify-start gap-10 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-start'>
            <img src='HowItWorks/behavorial.svg' alt='rafiki' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-[24px] font-bold'>Behavorial Segmentation</h1>
            <div className='flex flex-col'>
              <p className='text-dark_gray'>
                Consist of creating differend groups of
              </p>
              <p className='text-dark_gray'>customers based on geographic </p>
              <p className='text-dark_gray'>boundaries.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { Button } from '../ui/button';

export default function ChooseUs() {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-[35px] font-bold'>Why choose us?</h1>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-dark_gray'>
            We provide to you the best choiches for you. The leading
          </p>
          <p className='text-dark_gray'>
            political campaign intelligence platform.
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center gap-5 py-5'>
        <div className='flex min-w-[300px] flex-col items-center justify-center gap-2 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-start'>
            <img src='ChooseUs/data.svg' alt='data' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-[24px] font-bold'>Data</h1>
            <div className='flex flex-col'>
              <p className='text-dark_gray'>The biggest regional data, </p>
              <p className='text-dark_gray'>development, and POI data.</p>
            </div>
          </div>
        </div>
        <div className='flex min-w-[300px] flex-col items-center justify-center gap-2 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-start'>
            <img src='ChooseUs/technology.svg' alt='tech' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-[24px] font-bold'>Technology</h1>
            <div className='flex flex-col'>
              <p className='text-dark_gray'>
                Geospatial platform with advanced
              </p>
              <p className='text-dark_gray'>analysis that suit your neetds.</p>
            </div>
          </div>
        </div>
        <div className='flex min-w-[300px] flex-col items-center justify-center gap-2 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-start'>
            <img src='ChooseUs/services.svg' alt='services' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-[24px] font-bold'>Services</h1>
            <div className='flex flex-col'>
              <p className='text-dark_gray'>
                An expert team help you to analyze
              </p>
              <p className='text-dark_gray'>your poltical power.</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Button className='border-primary_blue text-primary_blue hover:bg-primary_blue rounded-full border bg-white px-10 py-6 font-bold hover:text-white'>
          Learn More
        </Button>
      </div>
    </div>
  );
}

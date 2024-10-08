import { BsCheck } from 'react-icons/bs';
import { Button } from '../ui/button';

export default function PlansAndPricing() {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='flex flex-col items-center justify-center gap-3'>
        <h1 className='text-[35px] font-bold'>Plans and Pricing</h1>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-dark_gray'>
            We provide to you the best choiches for you. The leading
          </p>
          <p className='text-dark_gray'>
            political campaign intelligence platform.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-10'>
        <div className='flex min-w-[300px] flex-col items-center justify-between gap-10 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full flex-col items-center justify-center gap-5'>
            <img src='PlansAndPricing/Standard.svg' alt='rafiki' />
            <div className='flex flex-col justify-start gap-28'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-center text-[24px] font-bold'>
                  Individual Plan
                </h1>
                <div className='flex flex-col gap-3 text-center'>
                  <p className='text-dark_gray flex items-center justify-start gap-5'>
                    <BsCheck className='text-green-400' /> 1 User
                  </p>
                  <p className='text-dark_gray flex items-center justify-start gap-5'>
                    <BsCheck className='text-green-400' /> 1 Basic Analysis
                  </p>
                  <p className='text-dark_gray flex items-center justify-start gap-5'>
                    <BsCheck className='text-green-400' /> Unlimited Select
                    Services
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='flex items-center justify-center gap-2'>
              <span className='text-[25px] font-bold'>$99</span> / mo
            </div>
            <Button className='hover:bg-primary_blue border-primary_blue text-primary_blue w-fit rounded-full border bg-white px-8 py-5 font-bold hover:text-white'>
              Select
            </Button>
          </div>
        </div>
        <div className='flex min-w-[300px] flex-col items-center justify-between gap-10 rounded-xl border border-soft_gray px-10 pb-12 pt-8'>
          <div className='flex w-full flex-col items-center justify-center gap-5'>
            <img src='PlansAndPricing/Standard.svg' alt='rafiki' />
            <div className='flex flex-col justify-start gap-28'>
              <div className='flex flex-col gap-5'>
                <h1 className='text-center text-[24px] font-bold'>
                  Parties Plan
                </h1>
                <div className='flex flex-col gap-3 text-center'>
                  <p className='text-dark_gray flex items-center justify-start gap-5'>
                    <BsCheck className='text-green-400' /> Unlimited User
                  </p>
                  <p className='text-dark_gray flex items-center justify-start gap-5'>
                    <BsCheck className='text-green-400' /> Basic Analysis
                  </p>
                  <p className='text-dark_gray flex items-center justify-start gap-5'>
                    <BsCheck className='text-green-400' /> Unlimited Select
                    Services
                  </p>
                  <p className='text-dark_gray flex items-center justify-start gap-5'>
                    <BsCheck className='text-green-400' /> Free Extended 1 Month
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='flex items-center justify-center gap-2'>
              <span className='text-[25px] font-bold'>$500</span> / mo
            </div>
            <Button className='border-primary_blue bg-primary_blue hover:text-primary_blue shadow-primary_blue w-fit rounded-full border px-8 py-5 font-bold text-white shadow-md hover:bg-white hover:shadow-none'>
              Select
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

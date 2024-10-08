export default function Advisor() {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-[35px] font-bold'>Our Advisors</h1>
      </div>
      <div className='flex items-center justify-center gap-5 py-5'>
        <div className='flex min-w-[300px] flex-col items-center justify-center gap-2 px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-center rounded-xl border'>
            <img src='AboutUs/xavier.svg' alt='data' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-center text-[24px] font-bold'>Xavier Oswald</h1>
            <h2 className='text-dark_gray text-center text-[16px] font-bold'>
              CO-FOUNDER, DEVELOPER
            </h2>
          </div>
        </div>
        <div className='flex min-w-[300px] flex-col items-center justify-center gap-2 px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-center rounded-xl border'>
            <img src='AboutUs/sara.svg' alt='data' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-center text-[24px] font-bold'>
              Sara Creighton
            </h1>
            <h2 className='text-dark_gray text-center text-[16px] font-bold'>
              CO-FOUNDER, DEVELOPER
            </h2>
          </div>
        </div>
        <div className='flex min-w-[300px] flex-col items-center justify-center gap-2 px-10 pb-12 pt-8'>
          <div className='flex w-full items-center justify-center rounded-xl border'>
            <img src='AboutUs/brandon.svg' alt='data' />
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-center text-[24px] font-bold'>Brandon Ogden</h1>
            <h2 className='text-dark_gray text-center text-[16px] font-bold'>
              PROJECT MANAGER
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

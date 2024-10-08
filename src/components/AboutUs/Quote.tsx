export default function Quote() {
  return (
    <div className='relative flex flex-col items-center justify-center'>
      <div className='absolute -top-10 right-0'>
        <img src='elementBlue.svg' alt='element' />
      </div>
      <div className='flex flex-col items-center justify-center gap-5'>
        <h1 className='text-[35px] font-bold'>
          <img src='AboutUs/quote.svg' alt='quote' />
        </h1>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-dark_gray text-[24px]'>
            In just small steps you&apos;ll connected directly to our
            technology.
          </p>
          <p className='text-dark_gray text-[24px]'>
            Knowledge about your own-power, your rivals,
          </p>
          <p className='text-dark_gray text-[24px]'>
            your voters, and your region in Election.
          </p>
        </div>
      </div>
    </div>
  );
}

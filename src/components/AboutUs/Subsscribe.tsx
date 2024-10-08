import { Button } from '../ui/button';

export default function Subscribe() {
  return (
    <div className='flex items-center justify-center'>
      <div className='bg-primary_blue flex w-fit items-center justify-between gap-96 rounded-xl px-28 py-10 text-white'>
        <div className='flex flex-col gap-7'>
          <div>
            <h3 className='text-[35px] font-bold'>Subscribe Now for </h3>
            <h3 className='text-[35px] font-bold'>Get Special Features!</h3>
          </div>
          <p>Let's subscribe with us and find the fun.</p>
        </div>
        <Button className='text-primary_blue hover:bg-primary_blue border bg-white px-16 py-9 text-[16px] font-bold shadow-md shadow-white hover:border-white hover:text-white hover:shadow-none'>
          Subscribe Now
        </Button>
      </div>
    </div>
  );
}

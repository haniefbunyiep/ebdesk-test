export default function AdminTopBar() {
  return (
    <div className='flex items-center justify-between bg-white px-7 py-5'>
      <div>
        <img src='/AdminTopBar/burger.svg' alt='burger' />
      </div>
      <div className='flex items-center justify-between gap-3'>
        <div>
          <img src='/AdminTopBar/toggle.svg' alt='toggle' />
        </div>
        <div className='flex items-center gap-2'>
          <img src='/AdminTopBar/user.svg' alt='user' />
          user.inc
        </div>
      </div>
    </div>
  );
}

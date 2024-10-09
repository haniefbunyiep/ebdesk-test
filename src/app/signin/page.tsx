'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

export default function SignIn() {
  return (
    <div className='flex'>
      <div className='flex h-screen w-[20%] flex-col justify-between bg-soft_gray px-10 py-12'>
        <div className='left-[60px] top-[60px]'>
          <Link href={'/'}>
            <img src='Logo/Logo.svg' alt='logo' />
          </Link>
        </div>
        <div>
          <img src='SignIn/Group1931.svg' alt='vector' />
        </div>
        <div className='flex justify-center'>
          <div className='flex w-[424px] flex-col items-center justify-center'>
            <h1 className='flex justify-center text-[24px] font-bold'>
              Services
            </h1>
            <p className='text-regent_gray w-[] text-center'>
              An expert team help you to analyze your polticalt power.An expert
              team .
            </p>
          </div>
        </div>
        <div>
          <p className='text-regent_gray'>
            ©2020 All Rights Reserved. PT Indonesia Indicator
          </p>
        </div>
      </div>
      <div className='flex w-full flex-col items-center justify-center p-72'>
        <div className='flex w-fit flex-col items-center justify-center gap-5'>
          <div className='flex flex-col gap-1'>
            <h1 className='text-[30px] font-bold'>Welcome to Logo Ipsum</h1>
            <div>
              <span>Don't have an account?</span>{' '}
              <span className='text-primary_blue font-bold'>Sign Up</span>
            </div>
          </div>
          <div className='flex w-full flex-col gap-5'>
            <div className='flex flex-col gap-2'>
              <Label className='font-bold'>
                Username<span className='text-primary_blue font-bold'>*</span>
              </Label>
              <Input />
            </div>
            <div className='flex flex-col gap-2'>
              <Label className='font-bold'>
                Password<span className='text-primary_blue font-bold'>*</span>
              </Label>
              <Input />
            </div>
            <div className='flex items-center gap-1'>
              <Checkbox />
              <Label className='text-regent_gray'>Remember Me</Label>
            </div>
            <div>
              <Button className='bg-primary_blue hover:bg-regent_gray w-full font-bold text-white'>
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

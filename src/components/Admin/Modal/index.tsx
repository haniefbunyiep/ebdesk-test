import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import GenderDropdown from './GenderDropdown';
import { useFormik } from 'formik';

export default function AdminModal() {
  const formik = useFormik({
    initialValues: {
      name: '',
      username: '',
      email: '',
      gender: '',
    },
    onSubmit: (values) => {
      console.log('Form Submitted:', values);
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='bg-primary_blue hover:text-primary_blue hover:border-primary_blue border px-6 font-bold text-white hover:bg-white'>
          Add User
        </Button>
      </DialogTrigger>
      <form onSubmit={formik.handleSubmit}>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>User Management</DialogTitle>
            <DialogDescription>
              If you need more info, please check Project Guidelines.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='flex flex-col gap-2'>
              <Label className='font-bold'>
                Name<span className='text-primary_blue font-bold'>*</span>
              </Label>
              <Input
                id='name'
                name='name'
                type='text'
                placeholder='Input Name'
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Label className='font-bold'>
                Username<span className='text-primary_blue font-bold'>*</span>
              </Label>
              <Input
                id='username'
                name='username'
                type='text'
                placeholder='Input Username'
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Label className='font-bold'>
                Email<span className='text-primary_blue font-bold'>*</span>
              </Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='Input Email'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
            <div className='flex flex-col gap-2'>
              <Label className='font-bold'>
                Gender<span className='text-primary_blue font-bold'>*</span>
              </Label>
              <GenderDropdown formik={formik} />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='button'
              className='text-dark_blue border border-soft_gray bg-soft_gray font-bold hover:bg-white'
              onClick={() => formik.resetForm()}
            >
              Cancel
            </Button>
            <Button
              type='submit'
              className='bg-primary_blue border-primary_blue hover:text-primary_blue border font-bold text-white hover:bg-white'
              // onClick={formik.handleSubmit as any}
            >
              Submit
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}

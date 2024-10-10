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
import { MdOutlineEdit } from 'react-icons/md';
import { useGetUserDetail } from '@/helpers/user-management/hooks/useGetUserDetail';
import { useFormik } from 'formik';
import { useUpdateUser } from '@/helpers/user-management/hooks/useUpdateUser';

interface EditUserProps {
  id: number;
}

export default function EditUser(props: EditUserProps) {
  const { userDetailData } = useGetUserDetail(props.id);
  const userData = userDetailData?.data;

  const { mutate } = useUpdateUser();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: userData?.firstName || '',
      lastName: userData?.lastName || '',
      username: userData?.username || '',
      email: userData?.email || '',
    },
    onSubmit: (values) => {
      mutate({ userId: props.id.toString(), values: values });
    },
  });

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className='flex w-full items-center justify-start gap-2 rounded-md bg-white p-2 text-black hover:bg-soft_gray'>
          <MdOutlineEdit />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                First Name
              </Label>
              <Input
                id='firstName'
                name='firstName'
                className='col-span-3'
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='name' className='text-right'>
                Last Name
              </Label>
              <Input
                id='lastName'
                name='lastName'
                className='col-span-3'
                onChange={formik.handleChange}
                value={formik.values.lastName}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Username
              </Label>
              <Input
                id='username'
                name='username'
                className='col-span-3'
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </div>
            <div className='grid grid-cols-4 items-center gap-4'>
              <Label htmlFor='username' className='text-right'>
                Email
              </Label>
              <Input
                id='Email'
                name='Email'
                className='col-span-3'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type='submit'
              className='bg-primary_blue border-primary_blue hover:text-primary_blue border font-bold text-white hover:bg-white'
            >
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

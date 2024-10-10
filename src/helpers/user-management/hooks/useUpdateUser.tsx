import { useUpdateUserMutation } from '../api/useUpdateUserMutation';

export const useUpdateUser = () => {
  const { mutate, isSuccess } = useUpdateUserMutation({
    onSuccess: (res: any) => {
      console.log(res);
      alert('Update User Success');
    },
    onError: (err: any) => {
      console.log(err);
    },
  });

  return {
    mutate,
    isSuccess,
  };
};

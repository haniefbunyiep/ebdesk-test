import { useDeleteUserMutation } from '../api/useDeleteUserMutation';

export const useDeleteUser = () => {
  const { mutate, isSuccess } = useDeleteUserMutation({
    onSuccess: (res: any) => {
      console.log(res);
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

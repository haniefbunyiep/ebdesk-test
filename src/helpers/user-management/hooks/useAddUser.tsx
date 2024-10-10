import { useAddUserMutation } from '../api/useAddUserMutation';

export const useAddUser = () => {
  const { mutate, isSuccess } = useAddUserMutation({
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

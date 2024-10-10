import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useAddUserMutation = ({ onSuccess, onError }: any) => {
  const { mutate, isSuccess, isError } = useMutation({
    mutationFn: async ({
      name,
      username,
      email,
      gender,
    }: {
      name: string;
      username: string;
      email: string;
      gender: string;
    }) => {
      const firstName = name.split(' ')[0];
      const lastName = name.split(' ')[1];
      return await axios.post('https://dummyjson.com/users/add', {
        firstName,
        lastName,
        username,
        email,
        gender,
      });
    },
  });

  return { mutate, isSuccess, isError };
};

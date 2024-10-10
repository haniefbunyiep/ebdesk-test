'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useLoginMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: any;
  onError: any;
}) => {
  const { mutate, isSuccess } = useMutation({
    mutationFn: async ({
      username,
      password,
    }: {
      username: string;
      password: string;
    }) => {
      return await axios.post('https://dummyjson.com/auth/login', {
        username,
        password,
      });
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
    isSuccess,
  };
};

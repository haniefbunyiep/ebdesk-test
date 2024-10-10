'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useUpdateUserMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: any;
  onError: any;
}) => {
  const { mutate, isSuccess } = useMutation({
    mutationFn: async ({ userId, values }: { userId: string; values: any }) => {
      return await axios.put(`https://dummyjson.com/users/${userId}`, {
        firstName: values.firstName,
        lastName: values.lastName,
        username: values.username,
        email: values.email,
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

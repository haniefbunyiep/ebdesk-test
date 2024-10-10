'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const useDeleteUserMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: any;
  onError: any;
}) => {
  const { mutate, isSuccess } = useMutation({
    mutationFn: async ({ userId }: { userId: any }) => {
      return await axios.delete(`https://dummyjson.com/users/${userId}`);
    },
    onSuccess,
    onError,
  });

  return {
    mutate,
    isSuccess,
  };
};

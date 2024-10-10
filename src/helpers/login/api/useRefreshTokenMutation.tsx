'use client';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { getRefreshToken } from '@/config/cookies';

export const useRefreshTokenMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess: any;
  onError: any;
}) => {
  const { mutate, isSuccess } = useMutation({
    mutationFn: async () => {
      const RefreshToken = await getRefreshToken();
      return await axios.post('https://dummyjson.com/auth/refresh', {
        refreshToken: RefreshToken?.value,
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

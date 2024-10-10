'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { getAccToken } from '@/config/cookies';

export const useGetUserAuthQuery = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const AccessToken = await getAccToken();
      return axios.get('https://dummyjson.com/auth/me', {
        headers: {
          Authorization: `Bearer ${AccessToken?.value}`,
        },
      });
    },
  });

  return { data, isLoading, isError, isSuccess };
};

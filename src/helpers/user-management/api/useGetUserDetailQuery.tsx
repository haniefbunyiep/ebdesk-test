'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetUserDetailQuery = (userId: number) => {
  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ['user-detail', userId],
    queryFn: async () => {
      return axios.get(`https://dummyjson.com/users/${userId}`);
    },
  });

  return { data, isLoading, isError, isSuccess, refetch };
};

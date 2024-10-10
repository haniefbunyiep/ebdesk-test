'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useGetAllUserQuery = (
  skip: string = '0',
  limit: string = '5',
  search?: string,
) => {
  const { data, isLoading, isError, isSuccess, refetch } = useQuery({
    queryKey: ['all-user', skip, limit],
    queryFn: async () => {
      if (search) {
        return axios.get(`https://dummyjson.com/users/search?q=${search}`);
      }
      return axios.get(
        `https://dummyjson.com/users?limit=${limit}&skip=${skip}&q=Sophia`,
      );
    },
  });

  return { data, isLoading, isError, isSuccess, refetch };
};

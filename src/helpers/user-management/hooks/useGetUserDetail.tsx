'use client';

import { useGetUserDetailQuery } from '../api/useGetUserDetailQuery';

export const useGetUserDetail = (userId: number) => {
  const {
    data: userDetailData,
    isError: userDetailrror,
    isLoading: userDetailding,
    isSuccess: userDetailcess,
    refetch,
  } = useGetUserDetailQuery(userId);

  return {
    userDetailData,
    userDetailrror,
    userDetailding,
    userDetailcess,
    refetch,
  };
};

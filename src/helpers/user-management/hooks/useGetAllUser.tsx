'use client';

import { useGetAllUserQuery } from '../api/useGetAllUserQuery';

export const useGetAllUser = (
  skip: string,
  limit?: string,
  search?: string,
) => {
  const {
    data: allUserData,
    isError: allUserError,
    isLoading: allUserLoading,
    isSuccess: allUserSuccess,
    refetch,
  } = useGetAllUserQuery(skip, limit, search);

  return {
    allUserData,
    allUserError,
    allUserLoading,
    allUserSuccess,
    refetch,
  };
};

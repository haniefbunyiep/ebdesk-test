import { useGetUserAuthQuery } from '../api/useGetUserAuthQuery';

export const useGetUserAuth = () => {
  const {
    data: userAuthData,
    isError: userAuthError,
    isLoading: userAuthLoading,
    isSuccess: userAuthSuccess,
  } = useGetUserAuthQuery();

  return {
    userAuthData,
    userAuthError,
    userAuthLoading,
    userAuthSuccess,
  };
};

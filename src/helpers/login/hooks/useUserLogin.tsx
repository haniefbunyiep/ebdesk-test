import { useLoginMutation } from '../api/useUserLoginMutation';
import {
  setAccToken,
  setRefreshToken,
  getAccToken,
  getRefreshToken,
  deleteAccToken,
  deleteReffToken,
} from '@/config/cookies';
import { setLoginData } from '@/store/user';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

export const useUserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const { mutate: userLoginMutation, isSuccess: UserLoginSuccess } =
    useLoginMutation({
      onSuccess: async (res: any) => {
        console.log(res);

        const AccessToken = await getAccToken();
        if (AccessToken) deleteAccToken();

        const RefreshToken = await getRefreshToken();
        if (RefreshToken) deleteReffToken();

        await setAccToken(res.data.accessToken);
        await setRefreshToken(res.data.accessToken);

        dispatch(
          setLoginData({
            name: `${res.data.firstName} ${res.data.lastName}`,
            email: res.data.email,
          }),
        );

        navigate.push('/');
      },
      onError: (err: any) => {
        console.log(err);
      },
    });

  return {
    userLoginMutation,
    UserLoginSuccess,
  };
};

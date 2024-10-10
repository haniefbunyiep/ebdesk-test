'use server';
import { cookies } from 'next/headers';

export const setAccToken = async (accesstoken: string) => {
  await cookies().set('acctkn', accesstoken);
};

export const setRefreshToken = async (accesstoken: string) => {
  await cookies().set('refftkn', accesstoken);
};

export const getAccToken = () => {
  return cookies().get('acctkn');
};

export const getRefreshToken = () => {
  return cookies().get('refftkn');
};

export const deleteAccToken = () => {
  return cookies().delete('acctkn');
};

export const deleteReffToken = () => {
  return cookies().delete('refftkn');
};

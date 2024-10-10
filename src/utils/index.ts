export const PathnameSlice = (pathname: any) => {
  let result = '';
  result = pathname.split('/');

  const arrLength = result.length - 1;

  return `/${result[arrLength]}`;
};

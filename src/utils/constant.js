export const accessToken = 'accessToken';
export const userId = 'userId';
export const userName = 'userName';
export const API_URL = 'https://node34277-timnya-aul.user.cloudjkt01.com';

export const toRupiah = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
});

export const toDate = (data) => {
  const date = new Date(data);
  const result = new Intl.DateTimeFormat('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }).format(date);
  return result;
};

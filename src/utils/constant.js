/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
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

export function transaksi(x, y) {
  x.forEach((element) => element.type = 0);
  y.forEach((element) => element.type = 1);
  return x.concat(y).sort((a, b) => (a.entry_date < b.entry_date ? 1 : -1));
}

/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Bell from '../assets/icons/mdi_bell.svg';
import Wallet from '../assets/icons/Wallet.svg';
import EMoney from '../assets/icons/EMoney.svg';
import Pendapatan from '../assets/icons/Pendapatan.png';
import Pengeluaran from '../assets/icons/Pengeluaran.png';
import Box from '../components/Box';
import { UserContext } from '../components/UserProvider';
import {
  getBalance, getEmoneyBal, getPendapatan, getPengeluaran, getWalletBal,
} from '../services/userService';
import { toDate, toRupiah } from '../utils/constant';
import Spinner from '../components/Spinner';

function Home() {
  const user = useContext(UserContext);

  const [balance, setBalance] = useState();
  const [wallet, setWallet] = useState();
  const [emoney, setEmoney] = useState();
  const [pendapatan, setPendapatan] = useState();
  const [pengeluaran, setPengeluaran] = useState();

  function transaksi(x, y) {
    x.forEach((element) => element.type = 0);
    y.forEach((element) => element.type = 1);
    return x.concat(y).sort((a, b) => (a.entry_date < b.entry_date ? 1 : -1));
  }

  useEffect(() => {
    getBalance(user.id).then((response) => {
      setBalance(response.totalMoney);
    });
    getWalletBal(user.id).then((response) => {
      setWallet(response.totalMoney);
    });
    getEmoneyBal(user.id).then((response) => {
      setEmoney(response.totalMoney);
    });
    getPendapatan(user.id).then((response) => {
      setPendapatan(response.data);
    });
    getPengeluaran(user.id).then((response) => {
      setPengeluaran(response.data);
    });
  }, []);

  return (
    <>
      {balance ? (
        <h1 className="display-5 m-0 pt-3">{toRupiah.format(balance)}</h1>
      ) : <Spinner /> }
      <p className="text-gray-50">Jumlah saldo</p>

      <Box>
        <div className="form-check form-check-reverse form-switch">
          <label className="form-check-label float-start fw-bold" htmlFor="notificationCheck">
            <img src={Bell} alt="" className="me-2" />
            Notifikasi Harian
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="notificationCheck"
            style={{ transformOrigin: 'right center', transform: 'scale(1.5)' }}
          />
        </div>
      </Box>

      <Box>
        <header className="d-flex justify-content-between border-bottom">
          <p className="fw-bold">Keuangan Saya</p>
          <Link to="transaksi" className="text-secondary text-decoration-none">Lihat semua</Link>
        </header>
        {(wallet && emoney) ? (
          <div className="container my-2">
            <div className="row mb-2 align-items-center">
              <div className="col">
                <img src={Wallet} className="me-3" alt="" />
                <span className="fw-bold">Dompet</span>
              </div>
              <div className="col text-end">
                <span>{toRupiah.format(wallet)}</span>
              </div>
            </div>
            <div className="row mb-2 align-items-center">
              <div className="col">
                <img src={EMoney} className="me-3" alt="" />
                <span className="fw-bold">E-Money</span>
              </div>
              <div className="col text-end">
                <span>{toRupiah.format(emoney)}</span>
              </div>
            </div>
          </div>
        ) : <Spinner /> }
      </Box>

      <header className="d-flex justify-content-between px-2 mb-2">
        <p className="fw-bold text-gray-50 m-0">Transaksi Terkini</p>
        <Link to="transaksi" className="text-secondary text-decoration-none">Lihat semua</Link>
      </header>
      <Box>
        <div className="container ps-0 my-2">
          {(pendapatan && pengeluaran)
            ? transaksi(pendapatan, pengeluaran).map((item) => (
              <div className="row mb-3 align-items-center">
                <div className="col-auto">
                  {item.type === 0
                    ? (<img src={Pendapatan} alt="" />) : <img src={Pengeluaran} alt="" />}
                </div>
                <div className="col ps-0">
                  <p className="m-0 text-capitalize">{item.kategori}</p>
                  <p className="m-0 text-gray-50">
                    <span className="fw-bold text-capitalize">
                      {item.akun}
                      {' - '}
                    </span>
                    {toDate(item.entry_date)}
                  </p>
                </div>
                <div className="col text-end">{toRupiah.format(item.amount)}</div>
              </div>
            )) : <Spinner /> }
        </div>
      </Box>
    </>
  );
}

export default Home;

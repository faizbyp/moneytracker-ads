import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import Bell from '../assets/icons/mdi_bell.svg';
import Wallet from '../assets/icons/Wallet.svg';
import EMoney from '../assets/icons/EMoney.svg';
import Box from '../components/Box';
import { UserContext } from '../components/UserProvider';
import {
  getBalance, getEmoneyBal, getPendapatan, getPengeluaran, getWalletBal,
} from '../services/userService';
import { toRupiah } from '../utils/constant';
import Spinner from '../components/Spinner';

function Home() {
  const user = useContext(UserContext);

  const [balance, setBalance] = useState();
  const [wallet, setWallet] = useState();
  const [emoney, setEmoney] = useState();
  const [pendapatan, setPendapatan] = useState();
  const [pengeluaran, setPengeluaran] = useState();

  function transaksi(x, y) {
    return x.concat(y).sort((a, b) => a.entry_date - b.entry_date);
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

  return balance ? (
    <>
      <h1 className="display-5 m-0 pt-3">{toRupiah.format(balance)}</h1>
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
          <Link to="akun" className="text-secondary text-decoration-none">Lihat semua</Link>
        </header>
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
      </Box>

      <header className="d-flex justify-content-between px-2 mb-2">
        <p className="fw-bold text-gray-50 m-0">Transaksi Terkini</p>
        <Link to="transaksi" className="text-secondary text-decoration-none">Lihat semua</Link>
      </header>
      <Box>
        <ul>
          {(pendapatan && pengeluaran)
          && transaksi(pendapatan, pengeluaran).map((item) => (
            <li>{item.amount}</li>
          ))}
        </ul>
      </Box>
    </>
  ) : (<Spinner />);
}

export default Home;

import { Link } from 'react-router-dom';
import Bell from '../assets/icons/mdi_bell.svg';
import Box from '../components/Box';

function Home() {
  return (
    <>
      <h1 className="display-5 m-0 pt-3">Rp100.000</h1>
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
      </Box>

      <header className="d-flex justify-content-between px-2 mb-2">
        <p className="fw-bold text-gray-50 m-0">Transaksi Terkini</p>
        <Link to="transaksi" className="text-secondary text-decoration-none">Lihat semua</Link>
      </header>
      <Box />
    </>
  );
}
export default Home;

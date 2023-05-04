import { Link } from 'react-router-dom';
import Bell from '../assets/icons/mdi_bell.svg';

function Home() {
  return (
    <>
      <h1 className="display-5 m-0 pt-3">Rp100.000</h1>
      <p className="text-gray-50">Jumlah saldo</p>

      <div className="bg-white rounded p-3 mb-4">
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
      </div>

      <div className="bg-white rounded p-3 mb-4" style={{ height: '150px' }}>
        <header className="d-flex justify-content-between border-bottom">
          <p className="fw-bold">Keuangan Saya</p>
          <Link to="/" className="text-secondary text-decoration-none">Lihat semua</Link>
        </header>
      </div>

      <header className="d-flex justify-content-between px-2 mb-2">
        <p className="fw-bold text-gray-50 m-0">Transaksi Terkini</p>
        <Link to="/" className="text-secondary text-decoration-none">Lihat semua</Link>
      </header>
      <div className="bg-white rounded p-3 mb-4" style={{ height: '150px' }} />
    </>
  );
}
export default Home;

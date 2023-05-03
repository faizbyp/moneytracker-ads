import { Link, Outlet } from 'react-router-dom';
import Ringkasan from '../assets/icons/Ringkasan.svg';
import Transaksi from '../assets/icons/Transaksi.svg';
import Tagihan from '../assets/icons/Tagihan.svg';
import Akun from '../assets/icons/Akun.svg';
import PlusTransaction from '../assets/icons/PlusTransaction.svg';

function Navbar({ isNav = true }) {
  return (
    <section className="px-3">
      <Outlet />
      {isNav ? (
        <>
          <div style={{ height: '80px' }} />
          <nav className="fixed-bottom bg-white border-top d-flex justify-content-around align-items-center text-center" style={{ height: '80px' }}>
            <Link to="/home"><img src={Ringkasan} alt="Ringkasan" /></Link>
            <Link to="/home/transaksi"><img src={Transaksi} alt="Transaksi" /></Link>
            {/* <Link to="/transaksi/add"
        className="btn btn-lg btn-primary text-white rounded-circle">+</Link> */}
            <Link to="/home/transaksi/add"><img src={PlusTransaction} alt="+" className="mb-2" /></Link>
            <Link to="/home/tagihan"><img src={Tagihan} alt="Tagihan" /></Link>
            <Link to="/home/akun"><img src={Akun} alt="Akun" /></Link>
          </nav>
        </>
      ) : null}
    </section>
  );
}
export default Navbar;

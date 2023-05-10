import { Link } from 'react-router-dom';
import ProfilePic from '../assets/icons/ProfilePic.svg';

function Akun() {
  return (
    <>
      <header className="d-flex align-items-center py-3">
        <h1 className="m-0">Akun</h1>
      </header>

      <main className="d-flex flex-column justify-content-center align-items-center" style={{ height: '24rem' }}>
        <img src={ProfilePic} alt="" />
        <h2>Nama</h2>
        <p>email@gmail.com</p>
        <br />
        <Link to="/" className="btn btn-white rounded-pill w-100 fw-bold py-3">KELUAR</Link>
      </main>
    </>
  );
}
export default Akun;

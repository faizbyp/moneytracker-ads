import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ProfilePic from '../assets/icons/ProfilePic.svg';
import { deleteCookies } from '../utils/cookiesManager';
import { accessToken, userId, userName } from '../utils/constant';
import { UserContext } from '../components/UserProvider';

function Akun() {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <>
      <header className="d-flex align-items-center py-3">
        <h1 className="m-0">Akun</h1>
      </header>

      <main className="d-flex flex-column justify-content-center align-items-center" style={{ height: '24rem' }}>
        <img src={ProfilePic} alt="" />
        <h2>{user.name}</h2>
        <p>{`User ID: ${user.id}`}</p>
        <br />
        <button
          type="button"
          className="btn btn-white rounded-pill w-100 fw-bold py-3"
          onClick={() => {
            deleteCookies(accessToken);
            deleteCookies(userId);
            deleteCookies(userName);
            navigate('/');
          }}
        >
          KELUAR
        </button>
      </main>
    </>
  );
}
export default Akun;

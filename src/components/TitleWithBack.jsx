import { Link } from 'react-router-dom';
import Back from '../assets/icons/Back.svg';

function TitleWithBack({ title }) {
  return (
    <header className="d-flex align-items-center py-3">
      <Link to="/home">
        <img src={Back} alt="" className="img-fluid ms-1 me-3" width={28} />
      </Link>
      <h1 className="m-0">{title}</h1>
    </header>
  );
}
export default TitleWithBack;

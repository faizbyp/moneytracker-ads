import { Navigate } from 'react-router-dom';
import { accessToken } from '../utils/constant';
import { isLoggedIn } from '../utils/cookiesManager';

function Protected({ children }) {
  if (!isLoggedIn(accessToken)) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default Protected;

import { createContext } from 'react';
import { getCookies } from '../utils/cookiesManager';
import { userId } from '../utils/constant';

export const UserContext = createContext();

function UserProvider({ children }) {
  const user = getCookies(userId);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;

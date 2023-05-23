import { createContext, useMemo } from 'react';
import { getCookies } from '../utils/cookiesManager';
import { userId, userName } from '../utils/constant';

export const UserContext = createContext();

function UserProvider({ children }) {
  const userObj = {
    id: getCookies(userId),
    name: getCookies(userName),
  };

  const user = useMemo(() => (userObj), []);

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
export default UserProvider;

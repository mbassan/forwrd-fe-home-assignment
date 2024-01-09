import { createContext, useContext, useState } from 'react';

const UsersContext = createContext({
  usersData: [],
  setUsersData: () => {},
  loading: false,
});

export const ContextProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);
  return (
    <UsersContext.Provider value={{ usersData, setUsersData }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => useContext(UsersContext);
export default UsersContext;

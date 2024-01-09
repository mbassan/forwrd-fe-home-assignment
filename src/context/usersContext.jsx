import { createContext, useContext, useState, useMemo } from 'react';
import data from '../data/initialUsersData.json';

// initial value
const UsersContext = createContext({
  usersData: [],
  setUsersData: () => {},
  loading: false,
});

// value provider
export const ContextProvider = ({ children }) => {
  const [usersData, setUsersData] = useState([]);

  return (
    <UsersContext.Provider value={{ usersData, setUsersData }}>
      {children}
    </UsersContext.Provider>
  );
};

// consumer
export const useUsersContext = () => useContext(UsersContext);

export default UsersContext;

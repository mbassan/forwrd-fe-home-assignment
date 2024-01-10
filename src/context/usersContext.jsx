import { createContext, useContext, useState } from 'react';

function saveUsersInLocalStorage(users) {
  try {
    localStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
    console.error(error);
  }
}
function getUsersFromLocalStorage() {
  try {
    const stringifiedUsers = localStorage.getItem('users');
    return JSON.parse(stringifiedUsers);
  } catch (error) {
    console.error(error);
  }
  return [];
}

const UsersContext = createContext({
  usersData: [],
  setUsersData: () => {},
  loading: false,
});

export const ContextProvider = ({ children }) => {
  const [usersData, setUsersDataInternal] = useState(getUsersFromLocalStorage());
  const setUsersData = (newUsersData) => {
    setUsersDataInternal(newUsersData);
    saveUsersInLocalStorage(newUsersData);
  };
  return (
    <UsersContext.Provider value={{ usersData, setUsersData }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => useContext(UsersContext);
export default UsersContext;

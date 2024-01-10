import data from '../data/initialUsersData.json';

export function createUserLoader(setUsersData, usersData) {
  return async () =>
    new Promise((resolve) => {
      if (usersData && usersData.length > 0) {
        resolve(usersData);
        return;
      }
      setTimeout(() => {
        setUsersData(data);
        resolve(data);
      }, 2000);
    });
}

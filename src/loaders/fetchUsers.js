import data from '../data/initialUsersData.json';

export function createUserLoader(setUsersData) {
  return async () =>
    new Promise((resolve) => {
      setTimeout(() => {
        setUsersData(data);
        resolve(data);
      }, 2000);
    });
}

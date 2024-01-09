import { generateId } from './generateId';

export function prepareUserDataForSave(users) {
  const firstUser = users[0];
  if (!firstUser || firstUser.id) {
    return users;
  }
  const usersWithFirstRecordId = users.slice(1);
  usersWithFirstRecordId.unshift({ ...firstUser, id: generateId() });
  return usersWithFirstRecordId;
}

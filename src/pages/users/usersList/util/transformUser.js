export function indexUsersById(users) {
  const usersById = {};
  users.forEach((user) => (usersById[user.id] = user));
  return usersById;
}

import { Typography } from '@mui/material';
import UserRow from '../userRow/UserRow';
import AddButton from '../../../components/AddButton';
import { validateUser, updateFieldErrorState } from './util';
import { EMPTY_USER } from './constants';
import styles from '../users.module.css';

function UsersList({ users, setUsers, errors, setErrors }) {
  const checkForErrors = (user, name) => {
    const errorData = validateUser(user, name);
    const updatedErrors = updateFieldErrorState({
      errors,
      errorData,
      userId: user.id,
      name,
    });
    setErrors(updatedErrors);
  };

  const updateUserProperty = (userId, name, value) => {
    setUsers((users) =>
      users.map((user) => {
        if (user.id !== userId) {
          return user;
        }
        const updatedUser = { ...user, [name]: value };
        checkForErrors(updatedUser, name);
        return updatedUser;
      })
    );
  };

  const onChangehandler = (userId, name, value) => {
    updateUserProperty(userId, name, value);
  };

  const onCreatehandler = () => {
    setUsers((users) => [EMPTY_USER, ...users]);
  };

  const onDeletehandler = (userId) => {
    setUsers((users) => users.filter((user) => user.id !== userId));
    setErrors((currentErrors) => {
      const updatedErrors = { ...currentErrors };
      delete updatedErrors[userId];
      return updatedErrors;
    });
  };

  return (
    <div className={styles.usersList}>
      <div className={styles.usersListHeader}>
        <Typography variant="h6">Users List</Typography>
        <AddButton handleClick={onCreatehandler} />
      </div>
      <div className={styles.usersListContent}>
        {users.map((user) => (
          <UserRow
            key={user.id}
            user={user}
            errors={errors[user.id]}
            onChangehandler={onChangehandler}
            onDeletehandler={onDeletehandler}
          />
        ))}
      </div>
    </div>
  );
}

export default UsersList;

import UserRow from '../userRow/UserRow';
import AddButton from '../../../components/AddButton';
import Panel from '../../../containers/Panel';
import { validateUser, updateFieldErrorState } from '../util';
import { EMPTY_USER } from '../constants';

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
    if (users.find((user) => !user.id)) {
      return;
    }
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
    <Panel title="User List" controls={<AddButton handleClick={onCreatehandler} />}>
      {users.map((user) => (
        <UserRow
          key={user.id}
          user={user}
          errors={errors[user.id]}
          onChangehandler={onChangehandler}
          onDeletehandler={onDeletehandler}
        />
      ))}
    </Panel>
  );
}

export default UsersList;

import { useState, useEffect, useMemo } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useUsersContext } from '../../context/usersContext';
import UsersList from './usersList/UsersList';
import PrimaryButton from '../../components/PrimaryButton';
import { compileErrorSummary } from './usersList/util';
import styles from './users.module.css';

function UsersPage() {
  const { usersData } = useUsersContext();
  const [usersDataLocal, setUsersDataLocal] = useState(usersData);
  const [errors, setErrors] = useState({});

  const { errorSummary, hasErrors } = useMemo(() => {
    const errorSummary = compileErrorSummary(errors);
    return { errorSummary, hasErrors: errorSummary.length > 0 };
  }, [errors]);

  useEffect(() => setUsersDataLocal(usersData), [usersData]);

  return (
    <div className={styles.pageRoot}>
      <div className={styles.pageContentContainer}>
        <UsersList
          users={usersDataLocal}
          setUsers={setUsersDataLocal}
          errors={errors}
          setErrors={setErrors}
        />
        <div className={styles.errorState}>{errorSummary}</div>
        <div className={styles.rightButtonContainer}>
          <PrimaryButton
            disabled={hasErrors}
            // TODO: Implement onClick handler
          >
            Save
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default UsersPage;

import { Grid } from '@mui/material';
import AutocompleteField from '../../../components/AutocompleteField';
import TrashIconButton from '../../../components/TrashIconButton';
import countryOptions from '../../../data/countries.json';
import { ROW_FIELD_INPUTS } from './constants';
import styles from '../users.module.css';

const UserRow = ({ user, onChangehandler, onDeletehandler, errors = {} }) => {
  return (
    <Grid container className={styles.userRow} columnSpacing={1}>
      {Object.entries(ROW_FIELD_INPUTS).map(([name, Input]) => {
        return (
          <Grid item key={`${user.id}-${name}`} md={2.75} className={styles.userRowItem}>
            <Input
              name={name}
              value={user[name]}
              onChangehandler={(name, value) => onChangehandler(user.id, name, value)}
              error={!!errors[name]}
              placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
              options={Input === AutocompleteField && countryOptions}
            ></Input>
            <div className={styles.userRowErrorMessage}>{errors[name]?.message}</div>
          </Grid>
        );
      })}
      <Grid item md={1} className={styles.userRowItem}>
        <TrashIconButton handleClick={() => onDeletehandler(user.id)} />
      </Grid>
    </Grid>
  );
};

export default UserRow;

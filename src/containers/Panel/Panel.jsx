import { Typography } from '@mui/material';
import styles from './panel.module.css';

export function Panel({ title, controls, children }) {
  return (
    <div className={styles.panel}>
      <div className={styles.panelHeader}>
        <Typography variant="h6">{title}</Typography>
        {controls}
      </div>
      <div className={styles.panelContent}>{children}</div>
    </div>
  );
}

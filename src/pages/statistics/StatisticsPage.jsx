import { PieChart } from 'react-minimal-pie-chart';
import { useUsersContext } from '../../context/usersContext';
import Panel from '../../containers/Panel';
import { compileCountryStatsFromUsers } from './util';
import styles from './statistics.module.css';
import { useMemo } from 'react';

function StatisticsPage() {
  const { usersData } = useUsersContext();
  const usersByCountry = useMemo(
    () => compileCountryStatsFromUsers(usersData),
    [usersData]
  );

  const legend = (
    <div>
      {usersByCountry.map((stats) => (
        <div key={stats.title} className={styles.legendItem}>
          <div
            className={styles.legendColor}
            style={{ backgroundColor: stats.color }}
          ></div>
          <div className={styles.legendLabel}>{stats.title}</div>
        </div>
      ))}
    </div>
  );

  const pieChart = (
    <div>
      <PieChart
        data={usersByCountry}
        label={({ x, y, dx, dy, dataEntry }) =>
          dataEntry.percentage > 5 && (
            <text
              x={x}
              y={y}
              dx={dx}
              dy={dy}
              style={{
                fontSize: '5px',
                fontFamily: 'sans-serif',
              }}
            >
              {Math.round(dataEntry.percentage) + '%'}
            </text>
          )
        }
      />
    </div>
  );

  return (
    <div className={styles.pageRoot}>
      <div className={styles.pageContentContainer}>
        <Panel title="User Statistics">
          <div className={styles.chartContainer}>
            {legend}
            {pieChart}
          </div>
        </Panel>
      </div>
    </div>
  );
}

export default StatisticsPage;

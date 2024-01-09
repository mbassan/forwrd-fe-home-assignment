import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import StatisticsPage from './pages/statistics/StatisticsPage';
import UsersPage from './pages/users/UsersPage';
import { useUsersContext } from './context/usersContext';
import { createUserLoader } from './loaders/fetchUsers';

function App() {
  const { setUsersData } = useUsersContext();
  const loader = createUserLoader(setUsersData);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <StatisticsPage />,
          loader,
        },
        {
          path: '/users',
          element: <UsersPage />,
          loader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

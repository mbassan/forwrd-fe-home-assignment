import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  const navigation = useNavigation();
  const content =
    navigation.state === 'loading' ? (
      <div className="loader">Loading...</div>
    ) : (
      <Outlet />
    );

  return (
    <>
      <NavBar />
      {content}
    </>
  );
};
export default Layout;

import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
  const location = useLocation();

  const hideHeadFooter = [
    '/login', '/register', '/profile', '/reset-password', '/account-type',
    '/forgot-password', '/verify-otp', '/change-password', '/interest',
    '/messages', '/wallet', '/client', '/assign', '/update-profile', '/dashboard', 
    '/client-dashboard', '/client-tasks', '/client-wallet'
  ];

  const shouldHide = hideHeadFooter.includes(location.pathname) || location.pathname.startsWith('/chat/', '/single', '/client');

  return (
    <div>
     {/* {!shouldHide && <NavBar />}
      {/* <Outlet />  */}
      {!shouldHide && <Footer />} */}
    </div>
  );
};

export default Layout;

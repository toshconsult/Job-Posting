import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  const hideHeadFooter = ['/login', '/register', '/profile', '/reset-password', '/account-type']

  const hideAll = hideHeadFooter.includes(location.pathname) 
  return (
    <div>
       {!hideAll && <NavBar />}
        <Outlet />
       {!hideAll && <Footer />}
    </div>
  )
}

export default Layout
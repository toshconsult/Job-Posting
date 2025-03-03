import NavBar from './NavBar'
import Footer from './Footer'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation()
  const hideHeadFooter = ['/login', '/register', '/profile', '/reset-password', '/account-type',
  '/forgot-password', '/reset-password', '/verify-otp', '/change-password', '/interest', '/create-task', '/all-task', '/verifly', '/get-tasks', '/v-type',
  ]

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
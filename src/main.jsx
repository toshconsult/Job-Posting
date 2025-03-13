
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import SignUp from './components/Accoount/SignUp.jsx'
import AuthContextProvider from './components/context/AuthContext.jsx'
import { AccountType } from './components/Accoount/AccountType.jsx'
import RoleContextProvider from './components/context/RoleContext.jsx'
import Login from './components/Accoount/Login.jsx'
import ForgotPassword from './components/Accoount/ForgotPassword.jsx'
import VerifyOTP from './components/Accoount/VerifyOTP.jsx'
import ResetPassword from './components/Accoount/ResetPassword.jsx'
import ChangePassword from './components/Accoount/ChangePassword.jsx'
import Interest from './components/Tasks/Interest.jsx'
import CreateTask from './components/Tasks/CreateTask.jsx'
import AllTask from './components/Tasks/AllTask.jsx'
import GetTasks from './components/Tasks/GetTasks.jsx'
import Onboarding from './components/Onboording/Onboarding.jsx'
import Verification from './components/Onboording/Verification.jsx'
// import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from './components/Home/Home.jsx'
import Select from './components/Select/Select.jsx'
import Request from './components/Request/Request.jsx'
import ProductClick from './components/Clients/ProductClick.jsx'
import DetailTask from './components/Details/DetailTask.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
        {index: true, element: <App />},
        {path: '/account-type', element: <AccountType />},
        {path: '/register', element: <SignUp />},
        {path: '/login', element: <Login />},
        {path: '/forgot-password', element: <ForgotPassword />},
        {path: '/verify-otp', element: <VerifyOTP />},
        {path: '/reset-password', element: <ResetPassword />},
        {path: '/change-password', element: <ChangePassword />},
        {path: '/interest', element: <Interest />},
        {path: '/create-task', element: <CreateTask />},
        {path: '/all-task', element: <AllTask />},
        {path: '/get-tasks', element: <GetTasks/>},
        {path: '/verifly', element: <Onboarding/>},
        {path: '/v-type', element: <Verification/>},
        
        {path: '/home', element: <Home />},
        {path: 'select', element: <Select />},
        {path: '/request', element: <Request />},
        {path: '/productclick',  element: <ProductClick />},
        {path: '/detailTask', element: <DetailTask />}
    ] 
  }
])

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <RoleContextProvider>

    <RouterProvider router={router} />

    </RoleContextProvider>
  </AuthContextProvider>,
)








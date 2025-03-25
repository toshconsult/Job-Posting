
import { createRoot } from 'react-dom/client'
import './index.css'

import "../node_modules/font-awesome/css/font-awesome.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import SignUp from './components/Accoount/SignUp.jsx'
import { AccountType } from './components/Accoount/AccountType.jsx'
import RoleContextProvider from './components/context/RoleContext.jsx'
import Login from './components/Accoount/Login.jsx'
import ForgotPassword from './components/Accoount/ForgotPassword.jsx'
import VerifyOTP from './components/Accoount/VerifyOTP.jsx'
import ResetPassword from './components/Accoount/ResetPassword.jsx'
import ChangePassword from './components/Accoount/ChangePassword.jsx'
import Interest from './components/Tasks/Interest.jsx'
import CreateTask from './components/Clients/CreateTask.jsx'
import AllTask from './components/Tasks/AllTask.jsx'

import SingleTask from './components/Tasks/SingleTask.jsx'
import GetMessages from './components/Chats/GetMessages.jsx'
import StartChat from './components/Chats/StartChat.jsx'
import Review from './components/Tasks/Review.jsx'
import Home from './components/Home/Home.jsx'
import Profile from './components/Users/Profile.jsx'
import { UserContext, UserContextProvider } from './components/UserContext.jsx';
import WalletPage from './components/Users/Wallet.jsx';
import Settingpage from './components/Users/Settingpage.jsx';
import ProductClick from './components/Clients/ProductClick.jsx';
import AssignTask from './components/Tasks/Assign-task.jsx';
import Sidebar from './components/SideBar.jsx';
import UpdateProfile from './components/Users/UpdateProfile.jsx';
import StartSupport from './components/Support/StartSupport.jsx';
import Dashboard from './components/Users/Dashboard.jsx';
import ClientDashboard from './components/Clients/ClientDashboard.jsx';
import ClientWallet from './components/Clients/ClientWallet.jsx';
import ClientTasks from './components/Clients/ClientTasks.jsx';
import EditTask from './components/Clients/EditTask.jsx';
import ApplyTask from './components/Tasks/ApplyTask.jsx';
import SwitchRole from './components/Accoount/SwitchRole.jsx';
import AppliedTask from './components/Tasks/AppliedTask.jsx';
import DeleteTask from './components/Clients/DeleteTask.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import GetTasks from './components/Tasks/GetTasks.jsx';
// import ApplyTask from './components/Tasks/ApplyTask.js


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
        {index: true, element: <Home /> },
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
        {path: '/single-task/:id', element: <SingleTask />},
        {path: '/Apply-task/:id', element: <ApplyTask />},
        {path: '/assign', element: <AssignTask />},
        {path: 'switch', element: <SwitchRole />},
        {path: '/messages', element: <GetMessages />},
        {path: '/chat', element: <StartChat />},
        {path: '/review', element: <Review />},
        {path: '/profile', element:<Profile />},
        {path: '/settings', element:<Settingpage />},
        {path: '/wallet', element: <WalletPage />},

        {path: '/client', element: <ProductClick /> },
        {path:'/context', element: <UserContext />},
        {path: '/update-profile', element: <UpdateProfile />},
        {path: '/side', element: <Sidebar />},
        {path: '/support', element: <StartSupport />},
        {path: '/dashboard', element: <Dashboard />},
        {path: '/apply', element: <AppliedTask/>},
        {path: '/get-tasks', element: <GetTasks />},
        

        //////// ----------------------------- CLIENT ROUTES ---------------------------------//////

        {path: '/client-dashboard', element: <ProtectedRoute allowedRoles={["client"]}><ClientDashboard /></ProtectedRoute>},
        {path: '/client-wallet', element: <ClientWallet />},
        {path: '/client-tasks', element: <ClientTasks />},
        {path: '/edit-task/:id', element: <EditTask />},
        {path: '/delete-task/:id', element: <DeleteTask />},
        


    ] 
  }
])

createRoot(document.getElementById('root')).render(
  <UserContextProvider >
    <RoleContextProvider>
   
    <RouterProvider router={router} />
   
    </RoleContextProvider>
    
  </UserContextProvider>
)








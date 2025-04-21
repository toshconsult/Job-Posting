
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
import StartChat from './components/Chats/SendMsg.jsx'
import Home from './components/Home/Home.jsx'
import Profile from './components/Users/Profile.jsx'
import {  UserContextProvider } from './components/context/UserContext.jsx';
import WalletPage from './components/Users/Wallet.jsx';
import Settingpage from './components/Users/Settingpage.jsx';
import UpdateProfile from './components/Users/UpdateProfile.jsx';
import Dashboard from './components/Users/Dashboard.jsx';
import ClientDashboard from './components/Clients/ClientDashboard.jsx';
import ClientWallet from './components/Clients/ClientWallet.jsx';
import ClientTasks from './components/Clients/ClientTasks.jsx';
import EditTask from './components/Clients/EditTask.jsx';
import ApplyTask from './components/Tasks/ApplyTask.jsx';
import AppliedTask from './components/Tasks/AppliedTask.jsx';
import DeleteTask from './components/Clients/DeleteTask.jsx';
import GetTasks from './components/Tasks/GetTasks.jsx';
import SingleProposal from './components/Clients/SingleProposal.jsx';
import Proposals from './components/Clients/Proposals.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import SubmitTask from './components/Users/SubmitTask.jsx';
import ApproveSubmission from './components/Clients/ApproveSubmission.jsx';
import StartReview from './components/Reviews/StartReview.jsx';
import Withdraw from './components/Payments/Withdraw.jsx';
import CreatePin from './components/Payments/CreatePin.jsx';
import UpdatePin from './components/Payments/UpdatePin.jsx';
import FundWallet from './components/Payments/Payment.jsx';
import { AssignedTasks } from './components/Tasks/AssignedTasks.jsx';
import { SubmittedTasks } from './components/Tasks/SubmitedTasks.jsx';
import { ClientSubmittedTasks} from './components/Clients/ClientSubmitetedTasks.jsx';
import { CompletedTasks } from './components/Tasks/CompletedTasks.jsx';
import ClientReview from './components/Reviews/ClientReview.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
        {index: true, element: <Home /> },
        {path: 'account-type', element: <AccountType />},
        {path: 'register', element: <SignUp />},
        {path: 'login', element: <Login /> },
        {path: 'forgot-password', element: <ForgotPassword />},
        {path: 'verify-otp', element: <VerifyOTP />},
        {path: 'reset-password', element: <ResetPassword />},
        {path: 'change-password', element: <ChangePassword />},
        {path: 'interest', element: <Interest />},
       

       
        


    ] 
  },
  {
    path: '/',
    element: <Layout />,
    children: [ 
      {
        element: <ProtectedRoute />,
        children: [
      {path: 'create-task', element: <CreateTask />},
      {path: 'all-task', element: <AllTask />},
      {path: 'single-task/:id', element: <SingleTask />},
      {path: 'Apply-task/:id', element: <ApplyTask />},
      {path: 'messages', element: <GetMessages />},
      {path: 'chat/:id', element: <StartChat />},
      {path: 'review/:id', element: <StartReview />},
      {path: 'client-review/:id', element: <ClientReview />},
      {path: 'profile/:id', element:<Profile />},
      {path: 'settings', element:<Settingpage />},
      {path: 'wallet', element: <WalletPage />},
      {path: 'submit-task/:id', element: <SubmitTask />},
      {path: 'assigned-tasks', element:<AssignedTasks />},
      {path: 'submitted-tasks', element:<SubmittedTasks />},
      {path: 'completed-tasks', element:<CompletedTasks />},

     
      {path: 'settings', element: <Settingpage />},
      {path: 'update-profile', element: <UpdateProfile />},
      {path: 'dashboard', element:  <Dashboard /> },
      {path: 'applied-tasks', element: <AppliedTask/>},
      {path: 'get-tasks', element: <GetTasks />},
      {path: 'withdraw', element: <Withdraw />},
      {path: 'create-pin', element: <CreatePin />},
      {path: 'update-pin', element: <UpdatePin />},
      


       //////// ----------------------------- CLIENT ROUTES ---------------------------------//////

       {path: 'client-dashboard', element: <ClientDashboard />},
       {path: 'client-wallet', element: <ClientWallet />},
       {path: 'client-tasks', element: <ClientTasks />},
       {path: 'client-submitted-tasks', element: <ClientSubmittedTasks />},
       {path: 'edit-task/:id', element: <EditTask />},
       {path: 'delete-task/:id', element: <DeleteTask />},
       {path: 'proposals/:id', element: <Proposals />},
       {path: 'single-proposal/:id', element: <SingleProposal /> },
       {path: 'approve-task', element: <ApproveSubmission />},
       {path: 'fund-wallet', element: <FundWallet />}
        ]
      }
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








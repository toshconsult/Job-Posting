import { createRoot } from 'react-dom/client';
import './index.css';
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RoleContextProvider from './components/context/RoleContext.jsx';

import SignUp from './components/Accoount/SignUp.jsx';
import { AccountType } from './components/Accoount/AccountType.jsx';
import Login from './components/Accoount/Login.jsx';
import ForgotPassword from './components/Accoount/ForgotPassword.jsx';
import ResetPassword from './components/Accoount/ResetPassword.jsx';
import ChangePassword from './components/Accoount/ChangePassword.jsx';
import Interest from './components/Tasks/Interest.jsx';
import CreateTask from './components/Clients/CreateTask.jsx';
import AllTask from './components/Tasks/AllTask.jsx';
import SingleTask from './components/Tasks/SingleTask.jsx';
import GetMessages from './components/Chats/GetMessages.jsx';
import StartChat from './components/Chats/SendMsg.jsx';
import Home from './components/Home/Home.jsx';
import Profile from './components/Users/Profile.jsx';
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
import StartReview from './components/Reviews/StartReview.jsx';
import Withdraw from './components/Payments/Withdraw.jsx';
import CreatePin from './components/Payments/CreatePin.jsx';
import UpdatePin from './components/Payments/UpdatePin.jsx';
import FundWallet from './components/Payments/FundWallet.jsx';
import { AssignedTasks } from './components/Tasks/AssignedTasks.jsx';
import { SubmittedTasks } from './components/Tasks/SubmitedTasks.jsx';
import { ClientSubmittedTasks } from './components/Clients/ClientSubmitetedTasks.jsx';
import { CompletedTasks } from './components/Tasks/CompletedTasks.jsx';
import ClientReview from './components/Reviews/ClientReview.jsx';
import OurCommunity from './components/Users/Community.jsx';
import { ClientCompletedTasks } from './components/Clients/ClientCompletedTask.jsx';
import { ClientOnGoingTasks } from './components/Clients/ClientOnGoingTasks.jsx';
import AboutPage from './components/LandingPage/AboutPage.jsx';
import AdminDashboard from './Admin/Dashboard.jsx';
import UsersTable from './Admin/Users.jsx';
import TasksTable from './Admin/Tasks.jsx';
import TransactionsTable from './Admin/Transactions.jsx';

createRoot(document.getElementById('root')).render(
  <RoleContextProvider>
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="account-type" element={<AccountType />} />
        <Route path="register" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="user/update-password/" element={<ResetPassword />} />
        <Route path="change-password" element={<ChangePassword />} />
        <Route path="interest" element={<Interest />} />
        <Route path="about" element={<AboutPage />} />



        

        {/* Protected Routes Layout */}
        <Route element={<ProtectedRoute />}>

        {/* Admin routes */}
        <Route path="admin-dashboard" element={<AdminDashboard />} />

        <Route path="admin-users" element={<UsersTable />} />
        <Route path="admin-tasks" element={<TasksTable />} />
        <Route path="admin-transactions" element={<TransactionsTable />} />
        
          {/* User Routes */}
          <Route path="create-task" element={<CreateTask />} />
          <Route path="all-task" element={<AllTask />} />
          <Route path="single-task/:id" element={<SingleTask />} />
          <Route path="Apply-task/:id" element={<ApplyTask />} />
          <Route path="messages" element={<GetMessages />} />
          <Route path="chat/:id" element={<StartChat />} />
          <Route path="review/:id" element={<StartReview />} />
          <Route path="client-review/:id" element={<ClientReview />} />
          <Route path="profile/:id" element={<Profile />} />
          <Route path="settings" element={<Settingpage />} />
          <Route path="community" element={<OurCommunity />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="submit-task/:id" element={<SubmitTask />} />
          <Route path="assigned-tasks" element={<AssignedTasks />} />
          <Route path="submitted-tasks" element={<SubmittedTasks />} />
          <Route path="completed-tasks" element={<CompletedTasks />} />
          <Route path="update-profile" element={<UpdateProfile />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="applied-tasks" element={<AppliedTask />} />
          <Route path="get-tasks" element={<GetTasks />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="create-pin" element={<CreatePin />} />
          <Route path="update-pin" element={<UpdatePin />} />

          {/* Client-specific Routes */}
          <Route path="client-dashboard" element={<ClientDashboard />} />
          <Route path="client-wallet" element={<ClientWallet />} />
          <Route path="client-tasks" element={<ClientTasks />} />
          <Route path="client-submitted-tasks" element={<ClientSubmittedTasks />} />
          <Route path="client-completed-tasks" element={<ClientCompletedTasks />} />
          <Route path="client-ongoing-tasks" element={<ClientOnGoingTasks />} />
          <Route path="edit-task/:id" element={<EditTask />} />
          <Route path="delete-task/:id" element={<DeleteTask />} />
          <Route path="proposals/:id" element={<Proposals />} />
          <Route path="single-proposal/:id" element={<SingleProposal />} />
          <Route path="fund-wallet" element={<FundWallet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </RoleContextProvider>
);

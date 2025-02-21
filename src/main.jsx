
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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
        {index: true, element: <App />},
        {path: '/account-type', element: <AccountType />},
        {path: '/register', element: <SignUp />},
        {path: '/login', element: <Login />}
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

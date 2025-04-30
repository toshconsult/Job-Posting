import { useLocation } from "react-router-dom"


const ClientTaskNav = () => {
  const location = useLocation()
  
  return (
    <>
    <ul className='flex gap-4 w-full justify-around  items-center h-5 px-5 py-7'>
        <li><a href="/client-tasks" className={location.pathname === "/all-task" && 'text-blue-600'}>All </a></li>
        <li><a href="/client-ongoing-tasks" className={location.pathname === "/assigned-tasks" && 'text-blue-600'}>Ongoing</a></li>
        <li><a href="/client-submitted-tasks" className={location.pathname === "/submitted-tasks" && 'text-blue-600'}>Submitted </a></li>
        <li><a href="/client-completed-tasks" className={location.pathname === "/completed-tasks" && 'text-blue-600'}>Completed</a></li>
    </ul>
    </>
  )
}

export default ClientTaskNav
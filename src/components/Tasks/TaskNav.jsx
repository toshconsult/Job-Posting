import { Link, useLocation } from "react-router-dom"


const TaskNav = () => {
  const location = useLocation()
  
  return (
    <>
    <ul className='flex gap-4 w-full justify-around  items-center h-5 px-5 py-7'>
        <li><Link to="/all-task" className={location.pathname === "/all-task" && 'text-blue-600'}>All </Link></li>
        <li><Link to="/assigned-tasks" className={location.pathname === "/assigned-tasks" && 'text-blue-600'}>Assigned</Link></li>
        <li><Link to="/submitted-tasks" className={location.pathname === "/submitted-tasks" && 'text-blue-600'}>Submitted </Link></li>
        <li><Link to="/completed-tasks" className={location.pathname === "/completed-tasks" && 'text-blue-600'}>Completed</Link></li>
    </ul>
    </>
  )
}

export default TaskNav
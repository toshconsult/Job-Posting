import { Link } from "react-router-dom"


const TaskNav = () => {
  return (
    <>
    <ul className='flex w-full justify-around items-center h-5 px-5 py-7'>
      
        <li><Link to="/all-task">All Tasks</Link></li>
        {/* <li><Link to="">Applied Tasks</Link></li> */}
        <li><Link to="/assigned-tasks">Assigned Tasks</Link></li>
        <li><Link to="/submitted-tasks">Submitted Tasks</Link></li>
        <li><Link to="/completed-tasks">Completed Tasks</Link></li>
    </ul>
    </>
  )
}

export default TaskNav
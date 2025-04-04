import React from 'react'

const TaskNav = () => {
  return (
    <>
    <ul className='flex w-full justify-around items-center h-5 px-5 py-7'>
        <li><a href="">All Tasks</a></li>
        <li><a href="">Applied Tasks</a></li>
        <li><a href="">Submitted Tasks</a></li>
        <li><a href="">Completed Tasks</a></li>
    </ul>
    </>
  )
}

export default TaskNav
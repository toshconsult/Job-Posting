import React, { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns';
import { AuthContext } from '../context/AuthContext';

const GetTasks = () => {

  const [userData, setUserData] = useState([]);
  const {token} = useContext(AuthContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const url = "https://thebestng.onrender.com/api/v1/task/get-tasks";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer: ${token}`
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserData(data);  
          console.log(data); 
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []); 
  return (
    <div className='flex flex-col lg:p-10 p-[50px]'>
          <div>
            <h2 className='lg:text-[30px] text-[20px] font-serif font-bold'>All Task</h2>
          </div>
          {
            userData && userData.map((u, task_id)=>(
              <div key={task_id} className='flex flex-col items-center lg:p-7 py-[20px]'>
            <div className='flex flex-col lg:w-[75%] w-[90vw] p-[20px]  bg-neutral-100 shadow-2xl lg:p-[30px] rounded-2xl  justify-center gap-1'>
              <div className='flex flex-col pb-5'>
                <div className='flex justify-between gap-2'>
                  <p className='lg:text-[25px] text-[20px] font-bold'>{u.task.title}</p>
                  <p className='text-green-400 font-medium'>{u.task.status}</p>
                </div>
                <p className='lg:text-[16px] text-[12px] text-gray-500'>{u.task.description}</p>
              </div>
              <div className='flex justify-between text-[12px]'>
                <p>
                  <span className='text-pink-500 font-medium '>Date:</span>{' '}
                  {u.task.date ? format(new Date(u.task.date), 'MM/dd/yyyy') : 'N/A'}
                </p>
                <p><span className='text-pink-500 font-medium'>Price:</span> N{u.task.pricing}</p>
              </div>
            </div>
        </div>
            ))
          }
    </div>
  )
}

export default GetTasks
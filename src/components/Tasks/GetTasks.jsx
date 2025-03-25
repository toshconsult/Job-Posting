import { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const GetTasks = () => {

  const [tasks, settasks] = useState([]);
  const {userToken, url} = useContext(UserContext)
  console.log(tasks);

  useEffect(() => {
    const getData = async () => {
      try {
        // const url = "https://thebestng.onrender.com/api/v1/task/get-tasks";
        const response = await fetch(`${url}user/all-tasks`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userToken}`
          },
        });

        if (response.ok) {
          const data = await response.json();
          settasks(data.tasks);  
          console.log(data); 
        } else {
          const error = await response.json()
          console.log(error);
          
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, []); 
  return (
      <div>
    <h2 className='lg:text-[30px] text-[20px] font-serif font-bold px-8 pb-5'>Tasks</h2>
    <div className='grid grid-cols-4'>
          { tasks?.map((task, index)=>(

            <div key={index}  className='w-full  cursor-pointer p-6 h-[200px]
            rounded-2xl border-1 border-[#F3F5FF] hover:bg-neutral-100 grid grid-cols-2 gap-[10px]'>
              <Link to={`/single-task/${task?._id}`}>
              <div className='flex flex-col pb-5'>
                <div className='flex justify-between gap-2 items-center'>
                  <img src={task?.taskImage} alt="" />
                  <p className='lg:text-[20px] w-[5vw] text-[15px] font-semibold'>{task?.title}</p>
                </div>
                <p className='lg:text-[16px] text-[12px] text-gray-500'>{task?.description}</p>
              </div>
              <div className='flex justify-between gap-2 text-[12px]'>
                <p>
                  <span className='text-pink-500 font-medium '>Date:</span>{' '}
                  {task?.date ? format(new Date(task?.date), 'MM/dd/yyyy') : 'N/A'}
                </p>
                <p><span className='text-pink-500 font-medium'>Price:</span> N{task?.pricing}</p>
              </div>
              </Link>
        </div>
            ))
          }
    </div>
    </div>
  )
}

export default GetTasks
import { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const GetTasks = () => {

  const [tasks, settasks] = useState([]);
  const {userToken} = useContext(UserContext)

  useEffect(() => {
    const getData = async () => {
      try {
        const url = "https://thebestng.onrender.com/api/v1/task/get-tasks";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${userToken}`
          },
        });

        if (response.ok) {
          const data = await response.json();
          settasks(data);  
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
    <div className='flex flex-col md:flex-row gap-5 px-8 md:px-20'>
          { tasks.map((txk, index)=>(

            <div key={index}  className='w-full md:w-[25vw] cursor-pointer p-6 h-[200px]
            rounded-2xl border-1 border-[#F3F5FF] hover:bg-neutral-100 '>
              <Link to={`/single-task/${txk.task._id}`}>
              <div className='flex flex-col pb-5'>
                <div className='flex justify-between gap-2'>
                  <p className='lg:text-[20px] text-[15px] font-semibold'>{txk.task.title}</p>
                  <p className='text-green-400 '>{txk.task.status}</p>
                </div>
                <p className='lg:text-[16px] text-[12px] text-gray-500'>{txk.task.description}</p>
              </div>
              <div className='flex justify-between gap-2 text-[12px]'>
                <p>
                  <span className='text-pink-500 font-medium '>Date:</span>{' '}
                  {txk.task.date ? format(new Date(txk.task.date), 'MM/dd/yyyy') : 'N/A'}
                </p>
                <p><span className='text-pink-500 font-medium'>Price:</span> N{txk.task.pricing}</p>
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
import { useContext, useEffect, useState } from 'react'
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Loader from '../Loader';

const GetTasks = () => {

  const [tasks, settasks] = useState([]);
  const { userToken, url } = useContext(UserContext);
  const [loading, setloading] = useState(false)
  const contLength = 100

  const sortedTasks = tasks
  ?.slice()
  .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

  const filtered = sortedTasks?.filter(task =>
    task.status != 'completed'
  )

  useEffect(() => {
    const getData = async () => {
      setloading(true)
      try {
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
         setloading(false)
        } 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [url, userToken]); 

  return (
    <div>
      {loading ? <Loader /> : (<>
      <h2 className='lg:text-[30px] text-[20px] font-serif font-bold px-8 pb-5'>Tasks</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 p-2 md:grid-cols-3 lg:grid-cols-3 gap-6'>
        {filtered?.map((task, index) => (
          <div key={index} className='w-full md:min-h-[300px] min-h-[100px]  cursor-pointer p-6 shadow-sm  pb-[0px] lg:pb-[30px] h-[250px] rounded-2xl border-1 border-[#F3F5FF] hover:bg-neutral-100'>
            <Link to={`/single-task/${task?._id}`}>
              <div className='flex flex-col pb-5 gap-[7px]'>
                <div className='flex gap-4 items-center'>
                  <img 
                    src={task?.taskImage} 
                    alt="" 
                    className="lg:w-[100px] w-[70px] h-[70px] lg:h-[100px] object-cover rounded-lg" 
                  />
                  <p className='lg:text-[20px] lg:w-[60vw] text-[15px] font-semibold '>{task?.title}</p>
                </div>
                <p className='lg:text-[16px] text-[12px] lg:w-[22vw] text-gray-500'>{task?.description.length > contLength ? task?.description.slice(0, contLength) + '....' : task?.description }</p>
              </div>
              <div className='flex justify-between gap-2 text-[12px]'>
                <p>
                  <span className='text-pink-500 font-medium '>Date:</span>{' '}
                  {task?.updatedAt ? format(new Date(task?.updatedAt), 'MM/dd/yyyy') : 'N/A'}
                </p>
                <p><span className='text-pink-500 font-medium'>Price:</span> ₦{task?.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      </>)}
    </div>
  );
};

export default GetTasks;

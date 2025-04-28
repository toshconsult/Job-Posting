import  {  useEffect, useState } from 'react'
import useUserStore from '../context/Store'


export const ClientSubmittedTasks = () => {

    const {url, userToken} = useUserStore()
    const [loading, setLoading] = useState(false)
    const [task, setTask] = useState([])
    const max = 200
    const sortedTasks = task
    ?.slice()
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    const filtered = sortedTasks?.filter(task =>
      task.status != 'completed'
    )

    console.log(task);
    
    useEffect(() => {
       
    const assigned = async () => {
        setLoading(true)
        const response = await fetch(`${url}client/all-completed-tasks`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${userToken}`,
                "content-type": "application/json",
            },
        });
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setTask(data.task)
            setLoading(false)
        } else {
            const err = await response.json()
            console.log(err);
        }
    }
    assigned()
}, [url, userToken])



const approve = async (id)=>{
    const res = await fetch(`${url}client/task/${id}/approve`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${userToken}`,
            "Content-Type": "application/json",
        }
    })

    if(res.ok){
        const data = await res.json()
        console.log(data);
        
    } else {
        const err = await res.json()
        console.log(err);
        
    }
}

  return (
    
    
   <div className='max-w-5xl mx-auto bg-[#F2F2F2] p-6 rounded-xl mt-6 '>
        {filtered?.length === 0 ? 
            <h1>No Tasks</h1>
        : 
           <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {filtered?.map((task, i)=>{
                return (
                    <div key={i} className='p-4  bg-gray-100 rounded-lg '>
                        <div className="flex gap-4 items-center">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShYwM33sSN7MtnLIq0k1qjhpoEtSstLE26gA&s" alt="" 
                            className="h-10 bg-gray-400 rounded-full" />
                            <p className='font-semibold'>{task?.tasker?.username}</p>
                        </div>
                        <div className='py-4'>
                            <p>{task.submissionNotes}</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <button className='border border-blue-100 text-blue-500 px-5 py-2 rounded-lg text-sm font-medium'>
                                View Image
                                 </button>
                            <button className='px-5 py-2 border border-white 
                             rounded-lg text-sm font-medium'
                             onClick={()=> approve(task._id)}
                             style={{background: '#333333', color: 'white'}}
                             >
                                Approve
                                 </button>
                        </div>
                    </div>
                )
            })}
           </div>
        }
   </div>
  )
}

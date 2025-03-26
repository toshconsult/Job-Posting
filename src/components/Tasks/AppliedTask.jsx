import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { UserContext } from '../UserContext';
import { Link, useParams } from 'react-router-dom';

const AppliedTask = () => {
    

    const {url} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [task, setTask] = useState([]);
    const userToken = localStorage.getItem('token')
    console.log(task)
   
    useEffect(() => {
        const applyTask = async () => {
            try{
                setLoading(true);
                const response = await fetch(`${url}user/tasker-tasks`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${userToken}`
                    }
                })

                if(response.ok){
                    const data  = await response.json();
                    setTask(data);
                    setLoading(false);
                    // console.log(data);
                } else{
                    const error = await response.json();
                    console.log(error);
                }
            } catch (error){
                console.error('Error fetching data:', error);
            }
        };
        
       
        applyTask();
    }, [url, userToken]);
    
  return (
    <div>
        <div className="mt-4 space-y-4">
              {task?.tasks?.map((req, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-md">
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{req.title}</p>
                    <p className="text-gray-500">Price: {req.price}</p>
                  </div>
                  <p className="text-gray-500 text-sm">{req.description}</p>
              <Link to={`/single-task/${req._id}`}>  <button className="text-pink-500 mt-2">Show Details</button></Link>
                </div>
              ))}
            </div>
    </div>
  )
}

export default AppliedTask
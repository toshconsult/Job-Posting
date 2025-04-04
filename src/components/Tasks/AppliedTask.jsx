import { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const AppliedTask = () => {
  const { url } = useContext(UserContext);
  const [err, setErr] = useState();
  const [task, setTask] = useState([]);
  const userToken = localStorage.getItem("token");
console.log(task);

  const sortedTasks = task?.tasks?.sort(
    (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
  );
// console.log(sortedTasks);

  useEffect(() => {
    const applyTask = async () => {
      try {
        const response = await fetch(`${url}user/tasker-tasks`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
           'Authorization':`Bearer ${userToken}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTask(data);
        } else {
          const error = await response.json();
          setErr(error.error);
          console.log(error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    applyTask();
  }, [url, userToken]);

  return (
    <div>
      <div className="mt-4 space-y-4">
        <p className="text-red-600">{err}</p>
        {sortedTasks?.map((req, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow-md">
            <div className="flex justify-between items-center">
            <Link to={`/single-task/${req._id}`}>
              <p className="font-bold cursor-pointer">{req.title}</p>
              </Link>
              <p className="text-gray-500">Price: {req.price}</p>
            </div>
            <p className="text-gray-500 text-sm">{req.description}</p>
            <div className="flex justify-between items-center">
            <Link to={`/review/${req._id}`}>
              <button className="text-blue-900 mt-2">Review</button>
            </Link>
            {req.taskStatus != 'ppending' ?<Link to={`/submit-task/${req._id}`}> <button className="bg-blue-900 px-3 py-2 rounded-2xl
         text-white cursor-pointer hover:bg-white hover:text-black hover:border
          hover:border-gray-200">Submit</button></Link> :
              <p className={req.taskStatus === "pending" ? 'text-red-500' : req.taskStatus === 
              'in-progress' ? 'text-blue-500' : 'text-green-500'}>{req.taskStatus}</p> }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedTask;

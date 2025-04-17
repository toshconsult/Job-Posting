import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { MdForwardToInbox } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

const ClientTasks = () => {
  const { url } = useContext(UserContext);
  const [err, setErr] = useState();

  const [tasks, setTasks] = useState([]);

  const task = tasks?.tasks;
  const maxContent = 150;
  const sorted = task?.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
  const userToken = localStorage.getItem("token");
  // console.log(task);

  // !!!!!!!!!!-------------------------------------- FUCTION TO GET ALL TASKS --------------------------------------!!!!!!!!!!
  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetch(`${url}client/get-all-posted-tasks`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          // console.log(data);
          setTasks(data);
        } else {
          const error = await response.json();
          setErr(error.error);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getTasks();
  }, [url, userToken]);

  // !!!!!!!!!!-------------------------------------- FUCTION TO GET ALL TASKS --------------------------------------!!!!!!!!!!



  return (
    <div>
      <div className="mt-4 space-y-4 md:px-10">
        <p className="text-red-600">{err}</p>
        {sorted?.length === 0 ? (
          <h2 className="text-2xl font-semibold">No tasks created yet</h2>
        ) : (
          <>
            {sorted?.map((task, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-xl border-1 border-[#F3F5FF]"
              >
                <div className="flex justify-between items-center">
                  <p className="font-bold">{task.title}</p>

                  <p className="text-gray-500">
                    {" "}
                    <Link to={`/edit-task/${task._id}`}> Edit </Link>
                  </p>
                </div>
                <p className="text-gray-500 text-sm pr-8">
                  {task.description.length > maxContent
                    ? task.description.slice(0, maxContent) + "......"
                    : task.description}
                </p>
                <div className="flex justify-between w-full pb-2 border-b-1 border-gray-200">
                  <Link to={`/proposals/${task._id}`}>
                    {" "}
                    <button className="text-[#2F3C7E] mt-2 cursor-pointer flex items-center gap-2">
                      Proposals <FaArrowRight size={15}/>
                    </button>
                  </Link>
                  <p className="text-red-600">
                    {" "}
                    <Link to={`/delete-task/${task._id}`}> Delete </Link>
                  </p>
                </div>
                <div className="pt-2">
                <Link to='/' >
                <MdForwardToInbox size={30}/>
                </Link>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ClientTasks;

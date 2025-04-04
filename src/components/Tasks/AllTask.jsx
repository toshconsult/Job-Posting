import { useContext, useEffect, useState } from "react";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import TaskNav from "./TaskNav";

const AllTask = () => {
  const { url, userToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const max = 200

  const task = tasks?.tasks;
  console.log(task);

  const sortedTasks = task
    ?.slice()
    .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    const filtered = sortedTasks?.filter(task =>
      task.status != 'completed'
    )

  // !!!!!!!!!!-------------------------------------- FUCTION TO GET ALL TASKS --------------------------------------!!!!!!!!!!
  useEffect(() => {
    const getTasks = async () => {
     
      try {
        setLoading(true);

        const response = await fetch(`${url}user/all-tasks`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setTasks(data);
          setLoading(false);
        } else {
          const error = await response.json();
          console.log(error.error);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };

    getTasks();
  }, [url, userToken]);

  return (
    // <></>
    <div className="">
      {loading ? (
        <Loader />
      ) : (
        <>
          <TaskNav/>
          <div className="grid place-items-center md:grid-cols-2 lg:grid-cols-3 ">
          {task?.length === 0 && (
            <h1 className="text-[25px] pb-6 mt-14 px-6 md:text-center">
              {" "}
              No Task Available
            </h1>
          )}
          {filtered?.map((task) => {

            return (
              <div
                key={task._id}
                className="w-[328px] md:w-[328px] min-h-[200px] md:min-h-[300px] border-2 p-4
                    border-[#F3F5FF] rounded-2xl flex flex-col justify-center items-center gap-y-10 my-2"
              >
                <h1 className="font-semibold text-[20px]">{task.title}</h1>
                <p className="text-[#333] font-normal text-[14px]">
                  {task.description.length > max ? task.description.slice(0, max) + '....' : task.description}
                </p>
                <Link to={`/single-task/${task._id}`}>
                  <button
                    className="w-[263px] h-[40px] bg-[#EA1588] hover:bg-white
                         hover:text-black hover:border-2 cursor-pointer hover:border-[#F3F5FF] text-white rounded-md"
                  >
                    View Details
                  </button>
                </Link>
              </div>
            );
          })}
          </div>
        </>
      )}
      
    </div>
  );
};

export default AllTask;

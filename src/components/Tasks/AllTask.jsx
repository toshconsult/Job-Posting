import { useContext, useEffect, useState } from "react";
import Loader from "../Loader";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const AllTask = () => {
  const { url, userToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();
  const task = tasks?.tasks

  // !!!!!!!!!!-------------------------------------- FUCTION TO GET ALL TASKS --------------------------------------!!!!!!!!!!
  const getTasks = async () => {
    //   console.log(token);

    try {
      setLoading(true);
      if (!userToken) {
        navigate("/login");
      }

      const response = await fetch(`${url}user/all-tasks`, {
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

  useEffect(() => {
    getTasks();
  }, []);

  return (
    // <></>
    <div className="flex flex-col items-center justify-center">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-[25px] pb-6 mt-14 px-6 md:text-center">
            All
            <span className="text-[#EA1588] "> Tasks</span>
          </h1>
          {task?.length === 0 && (
            <h1 className="text-[25px] pb-6 mt-14 px-6 md:text-center">
              {" "}
              No Task Available
            </h1>
          )}
          {task?.map((task) => {
            //  console.log(task);

            return (
              <div
                key={task._id}
                className="w-[328px] md:w-[652px] min-h-[197px] border-2 p-4
                    border-[#F3F5FF] rounded-2xl flex flex-col justify-center items-center gap-y-10 my-2"
              >
                <h1 className="font-semibold text-[20px]">
                  {task.title}
                </h1>
                <p className="text-[#333] font-normal text-[14px]">
                  {task.description}
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
        </>
      )}
    </div>
  );
};

export default AllTask;

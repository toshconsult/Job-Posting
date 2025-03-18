import { useContext, useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Loader from "../Loader";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../UserContext";
import ApplyTask from "./ApplyTask"; // Import the ApplyTask component
import image from '/src/assets/react.svg' 

const SingleTask = () => {
  const { url, user, userToken } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [task, setTask] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false); // Modal state

  const getTasks = async () => {
    try {
      setLoading(true);
      if (!userToken) {
        console.error("Token is missing!");
        navigate("/login");
      }

      const response = await fetch(`${url}api/v1/task/get-task/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${userToken}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        setTask(data);
        setLoading(false);
      } else {
        const data = await response.json();
        console.log(data.error);
        navigate("/login");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getTasks();
  }, [userToken, user]);

  return (
    <div className="flex flex-col md:flex-row items-start pt-10 px-4 md:px-8 lg:px-16 w-full max-w-6xl mx-auto">
      <div className="flex flex-col items-center w-full md:w-3/4">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="w-full flex justify-between">
              <div className="flex flex-wrap items-center gap-4 w-full">
                <img src={image} alt="user" className="w-12 h-12 rounded-full" />
                <h2 className="text-xl md:text-2xl font-semibold">{user?.username}</h2>
              </div>
              {/* Apply Button to Open Modal */}
              <button
                className="bg-pink-500 text-white px-4 py-2 rounded-lg mt-2"
                onClick={() => setIsOpen(true)}
              >
                Apply
              </button>
            </div>
            <hr className="w-full text-gray-400 mt-3" />

            <div className="py-5 text-center">
              <h2 className="text-2xl md:text-3xl font-bold">{task?.task?.title}</h2>
            </div>

            <div className="w-full flex flex-wrap justify-between bg-gray-100 p-4 rounded-lg">
              <span className="text-sm md:text-base font-medium capitalize bg-green-100 text-green-700 px-3 py-1 rounded-md">
                {task?.task?.status}
              </span>
              <span className="text-sm md:text-base font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-md">
                Applicants: {task?.applicantsCount}
              </span>
            </div>

            <div className="w-full bg-white p-4 sm:p-6 lg:p-8 rounded-lg mt-4">
              <p className="text-gray-600">
                <strong>Description:</strong> {task?.task?.description}
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> {task?.task?.location}
              </p>
              <p className="text-gray-600">
                <strong>Must Have:</strong> {task?.task?.mustHave?.join(", ")}
              </p>
              <p className="text-gray-600">
                <strong>Payment Status:</strong>{" "}
                <span
                  className={`font-semibold ${
                    task?.task?.paymentStatus === "paid" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {task?.task?.paymentStatus}
                </span>
              </p>
              <p className="text-gray-600">
                <strong>Pricing:</strong> ${task?.task?.pricing}
              </p>
              <p className="text-gray-500 text-xs mt-4 text-center">
                Posted on: {new Date(task?.task?.createdAt).toDateString()}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Modal Component */}
      <Transition.Root show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
          <div className="fixed inset-0 bg-gray-100 bg-opacity-[90%] transition-opacity" />

          <div className="fixed inset-0 flex justify-end items-center">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-300"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="w-full max-w-md bg-white h-full shadow-xl p-6">
                <Dialog.Title className="text-xl font-semibold text-gray-900">
                  Apply for Task
                </Dialog.Title>

                {/* Apply Task Component Inside Modal */}
                <ApplyTask taskId={id} closeModal={() => setIsOpen(false)} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default SingleTask;

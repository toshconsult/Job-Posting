import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import Loader from "../Loader";

const ApplyTask = ({ taskId, closeModal }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { url, userToken } = useContext(UserContext);

  const apply = async () => {
    setLoading(true);
    const response = await fetch(`${url}api/v1/task/${taskId}/apply`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      setMessage(data);
      setLoading(false);
    } else {
      const data = await response.json();
      setMessage(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    apply();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="p-4 w-full rounded-md border border-gray-200 flex flex-col justify-center items-center">
          <div className="text-center flex flex-col text-2xl font-semibold">
            <p className="mx-auto mb-5 text-pink-600">
              {message?.message ? <IoIosCheckmarkCircle size={40} /> : <FaCircleXmark size={40} />}
            </p>
            <p>{message?.message ? message.message : message.error}</p>
          </div>
          <button className="text-blue-500 mt-4" onClick={closeModal}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default ApplyTask;

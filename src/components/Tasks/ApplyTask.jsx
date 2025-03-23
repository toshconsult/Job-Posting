import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";
import Loader from "../Loader";

const ApplyTask = () => {
  
  const [loading, setLoading] = useState(false);
  const { url, userToken, user } = useContext(UserContext);
  const [proposal, setProposal] = useState('')
  const [price, setPrice] = useState('')

  const userDetail = user?.userDetails?.user
  console.log(userDetail._id);

  const apply = async (e) => {

    e.preventDefault()

    const formData = new FormData()
    formData.append('price', price)
    formData.append('description', proposal)

    setLoading(true);

    const response = await fetch(`${url}user/apply//${userDetail._id}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userToken}`,
        // "Content-Type": "application/json",
      },
      body: formData
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
    // apply();
  }, []);

  return (
    <div className="flex flex-col items-center md:items-start px-4 md:px-20">
        
              <h1 className="text-[25px] pb-6 mt-14 md:text-center">
                Send Your <span className="text-[#EA1588]">Proposal</span>
              </h1>
              <form onSubmit={apply} className="w-full max-w-2xl">
                {/* <ToastContainer /> */}
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="text-[#333] font-semibold">
                      Your price
                    </label>
                    <input
                      type="number"
                      id="title"
                      value={price}
                      placeholder="Enter price"
                      onChange={(e)=>setPrice(e.target.value)}
                      className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                    />
                  </div>
    
                  <div>
                    <label htmlFor="description" className="text-[#333] font-semibold">
                      Description
                    </label>
                    <textarea
                      id="description"
                     value={proposal}
                      placeholder="Enter the task description"
                      onChange={(e)=>setProposal(e.target.value)}
                      className="w-full h-[114px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                    />
                  </div>
                  </div>
                  <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full py-4 bg-[#EA1588] text-white rounded-3xl hover:bg-white hover:text-black hover:border-2 hover:border-[#F3F5FF] transition-all"
              >
                Post
              </button>
            </div>
                  </form>
                  </div>
  );
};

export default ApplyTask;

import { useContext,  useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../Loader";
import { toast, ToastContainer } from "react-toastify";

const ApplyTask = () => {
  
  const {id} = useParams()
  // console.log(id);
  
  const [loading, setLoading] = useState(false);
  const { url, userToken,  } = useContext(UserContext);
  const [proposal, setProposal] = useState('')
  const [price, setPrice] = useState('')
console.log(userToken)
  const [date, setDate] = useState('')
  const navigate = useNavigate()
const taskTitle = JSON.parse(localStorage.getItem('taskTitle'))
 
  const apply = async (e) => {

    e.preventDefault()
if(price === '' || proposal === '' || date === ''){
  toast.error('All field require')
  return
}

if(taskTitle === null || taskTitle === undefined || taskTitle === ''){
  console.log(taskTitle);
  
  toast.error('Please select a task')
  return
}
    const requestBody = {
      price: price,
      description: proposal,
      date: date,
      title: taskTitle,
  };
    setLoading(true);
// console.log(formData);

    const response = await fetch(`${url}user/apply/${id}`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${userToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestBody)
    });

    if (response.ok) {
      const data = await response.json();
      // setMessage(data.message);
      console.log(data);
      toast.success(data.message)
      navigate('/dashboard')
      setLoading(false);
    } else {
      const err = await response.json();
      toast.error(err.error)
      console.log(err);
      
      setLoading(false);
    }

    setProposal('')
    setPrice('')
    setDate('')
  };

  // useEffect(() => {
  //   // apply();
  // }, []);

  return (
    <div className="flex flex-col items-center md:items-start px-4 md:px-20">
        {loading ? <Loader /> : <>
              <h1 className="text-[25px] pb-6 mt-14 md:text-center">
                Send Your <span className="text-[#EA1588]">Proposal</span>
              </h1>
              <form onSubmit={apply} className="w-full max-w-2xl">
                <ToastContainer />
                <div className="space-y-4">
                  <div>
                    <label htmlFor="price" className="text-[#333] font-semibold">
                      Your price
                    </label>
                    <input
                      type="number"
                      id="price"
                      value={price}
                      placeholder="Enter price"
                      onChange={(e)=>setPrice(e.target.value)}
                      className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                    />
                  </div>
    
                  <div>
                    <label htmlFor="proposal" className="text-[#333] font-semibold">
                      Proposal
                    </label>
                    <textarea
                      id="proposal"
                     value={proposal}
                      placeholder="Enter the task description"
                      onChange={(e)=>setProposal(e.target.value)}
                      className="w-full h-[114px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="date" className="text-[#333] font-semibold">
                      Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={date}
                      placeholder="Enter price"
                      onChange={(e)=>setDate(e.target.value)}
                      className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                    />
                  </div>
                  </div>
                  <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full py-4 bg-[#EA1588] text-white rounded-3xl hover:bg-white
                 hover:text-black hover:border-2 hover:border-[#F3F5FF] transition-all"
        
              >
               Submit
              </button>
            </div>
                  </form>
                  </>}
                  </div>
  );
};

export default ApplyTask;

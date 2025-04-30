import {  useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import Loader from "../Loader"
import { FaStar } from "react-icons/fa"
import { useParams } from "react-router-dom"
import useUserStore from "../context/Store"
import ClientSideBar from "../Clients/ClientSideBar"
import Sidebar from "../SideBar"


const StartReview = () => {
  const {url, userToken, user} = useUserStore()
  const [loading, setloading] = useState(false)
  const totalRating = 5
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
// console.log(rating);
const taskTitle = JSON.parse(localStorage.getItem("taskTitle"))
console.log(taskTitle)
const {id} = useParams()
  const review = async (e)=> {

e.preventDefault()
    const response = await fetch(`${url}user/task/${id}/review`, {
      method: 'POST',
            headers: {
                'Authorization': `Bearer ${userToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({taskerRating: rating, taskerComment: comment, projectTitle: taskTitle})
    })

    if(response.ok){
      const data = await response.json()
      toast.success(data.message)
      // console.log(data);
      setloading(false)
      
  } else {
      const err = await response.json()
      toast.error(err.error)
      // console.log(err);
      
  }
  setComment('')
  setRating(0)
  }
  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      {user?.userType === "client" ? <ClientSideBar /> : <Sidebar />}
            {loading ? <Loader />: <>
              <div className="mt-4 space-y-4 md:px-10 w-full">
                  <h1 className="text-[25px] pb-6 mt-14 md:text-center">
                   Drop a <span className="text-[#333]">Review</span>
                  </h1>
                  <form onSubmit={review} className="w-full max-w-2xl">
                    <ToastContainer />
                    <div className="space-y-4">

                      <div className="flex">
                        {[...Array(totalRating)].map((_, i)=>{
                          const starvalue = i + 1

                          return (
                            <span  key={starvalue} onClick={()=>setRating(starvalue)}
                            className={`cursor-pointer text-2xl transition duration-300 ${
                              starvalue <= rating ? "text-[#333]" : "text-gray-300"
                            }`}
                            ><FaStar /></span>
                          )
                        })}
                        
                      </div>
        
                      <div>
                        <label htmlFor="note" className="text-[#333] font-semibold">
                          Review
                        </label>
                        <textarea
                          id="note"
                          name="comment"
                         value={comment}
                          placeholder="Enter your honest review"
                          onChange={(e)=>setComment(e.target.value)}
                          className="w-full h-[114px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                        />
                      </div>
    
                     
                      </div>
                      <div className="flex justify-center mt-6">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#333] text-white rounded-3xl hover:bg-white
                     hover:text-black hover:border-2 hover:border-[#F3F5FF] transition-all cursor-pointer"
            
                  >
                  {loading ? "Loading" : " Submit"}
                  </button>
                </div>
                      </form>
                      </div>
                      </>}
                      </div>
  )
}

export default StartReview
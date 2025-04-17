import { useContext, useState } from "react"
import { UserContext } from "../context/UserContext"
import { ToastContainer } from "react-toastify"
import Loader from "../Loader"
import { FaStar } from "react-icons/fa"
import { useParams } from "react-router-dom"


const StartReview = () => {
  const {url, userToken} = useContext(UserContext)
  const [loading, setloading] = useState(false)
  const totalRating = 5
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
// console.log(rating);
const {id} = useParams()
  const review = async (e)=> {

e.preventDefault()
    const response = await fetch(`${url}user/task/${id}/review`, {
      method: 'POST',
            headers: {
                'Authorization': `Bearer ${userToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({'clientRating': rating, 'clientComment': comment})
    })

    if(response.ok){
      const data = await response.json()
      console.log(data);
      setloading(false)
      
  } else {
      const err = await response.json()
      console.log(err);
      
  }
  }
  return (
    <div className="flex flex-col items-center md:items-start px-4 md:px-20">
            {loading ? <Loader />: <>
                  <h1 className="text-[25px] pb-6 mt-14 md:text-center">
                   Drop a <span className="text-[#EA1588]">Review</span>
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
                              starvalue <= rating ? "text-[#EA1588]" : "text-gray-300"
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
                    className="w-full py-4 bg-[#EA1588] text-white rounded-3xl hover:bg-white
                     hover:text-black hover:border-2 hover:border-[#F3F5FF] transition-all cursor-pointer"
            
                  >
                   Submit
                  </button>
                </div>
                      </form>
                      </>}
                      </div>
  )
}

export default StartReview
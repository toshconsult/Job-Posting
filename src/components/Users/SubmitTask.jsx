import {  useState } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import Loader from "../Loader"
import { toast, ToastContainer } from "react-toastify"

const SubmitTask = () => {
const [loading, setloading] = useState(false)
const {url, userToken} = useUserStore()
const [note, setNote] = useState('')
const [image, setImage] = useState(null)

    const {id} = useParams()
    console.log(note);
    

    const submiTask = async (e)=>{
        e.preventDefault()

        setloading(true)
        const formData = new FormData()
        formData.append('submissionNotes', note)
       if(image) formData.append('submissionFile', image)

        const res = await fetch(`${url}user/task/${id}/submit`, {
            method: 'POST',
            headers: {
                // "Content-Type": "application/json",
                'Authorization': `Bearer ${userToken}`,
            },
            body: formData
            
        })

        if(res.ok){
            const data = await res.json()
            setloading(false)
            console.log(data);
            toast.success(data.message)
            
        } else {
            const err = await res.json()
            toast.error(err.error)
            // console.log(err);
            
        }

        setNote('')
        setImage(null)
    }
  return (
    <div className="flex flex-col items-center md:items-start px-4 md:px-20">
        {loading ? <Loader /> : <>
              <h1 className="text-[25px] pb-6 mt-14 md:text-center">
                Submit <span className="text-[#EA1588]">Task</span>
              </h1>
              <form onSubmit={submiTask} className="w-full max-w-2xl">
                <ToastContainer />
                <div className="space-y-4">
    
                  <div>
                    <label htmlFor="note" className="text-[#333] font-semibold">
                      Submission Note
                    </label>
                    <textarea
                      id="note"
                      name="submissionNotes"
                     value={note}
                      placeholder="Enter the submission note"
                      onChange={(e)=>setNote(e.target.value)}
                      className="w-full h-[114px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="image" className="text-[#333] font-semibold">
                      Submission Image
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="submissionFile"
                    //   value={file}
                      placeholder="Enter price"
                      onChange={(e)=>setImage(e.target.files[0])}
                      className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
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

export default SubmitTask
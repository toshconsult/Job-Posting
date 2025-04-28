import {   useEffect,  useMemo,  useState } from "react"
import Loader from "../Loader"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { toast, ToastContainer } from "react-toastify"
import { Link,  useNavigate } from "react-router-dom"
import Modal from "../Modal"
import { AccountType } from "./AccountType"
import useUserStore from "../context/Store"


const Login = ({modalOpen}) => {
    const {url} = useUserStore()
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [formdata, setFormdata] = useState({
        email: '',
        password: ''
    })

    const passToggle = useMemo(()=>{
        return showPassword ? <FaRegEye /> : <FaRegEyeSlash />
    },[showPassword])

    useEffect(() => {
        localStorage.removeItem('token')
    }
, [])

    const navigate = useNavigate()
    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const handleChange = (e) => { 
        const {name, value} = e.target
        setFormdata(prev => ({
            ...prev,
            [name]: value
        }))
        
    }
    const handleSubmit = async (e) => { 
        e.preventDefault()

        try {
            setLoading(true)
            const response = await fetch(`${url}user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formdata)
            })
            if(response.ok){
                const data = await response.json()
                // console.log(data);
                const token = data.token
                localStorage.setItem('token', token)
                toast.success(data.message)
                setLoading(false)
                if(data.user.userType === "client"){
                    navigate('/client-dashboard')
                } else if(data.user.userType === "tasker"){
                    if(data.user.skillsets.length === 0){
                        navigate('/interest')
                    }else if(data.user.profileDescription === ""){
                        navigate('/update-profile')
                    } else {
                        navigate('/dashboard')
                    }
 }

            } else {
                const data = await response.json()
                toast.error(data.error)
                setLoading(false)
            }
        } catch (error) {
           console.log(error);
            
        }
    }
const goto = ()=> navigate('/account-type')
    
  return (
    <div className={modalOpen ? "w-full h-full" : "flex justify-center items-center min-h-screen"}>
    {loading ? <Loader /> :
    <div className={modalOpen ? 'border-0' :"flex h-full md:h-[90vh] w-[98%]  md:w-[70%] mx-auto justify-center border-2 border-[#dfe4fc] rounded-2xl shadow-md items-center "}>
    <img src="https://img.freepik.com/premium-photo/portrait-confident-male-person-as-contractor-outdoors-developing-planning-construction-projects-professional-architect-industry-safety-with-arms-crossed-development_590464-347760.jpg?ga=GA1.1.1994411634.1732195402&semt=ais_hybrid&w=740"
     className={modalOpen ? 'hidden' :" h-full w-[45%] object-fit rounded-2xl hidden md:flex"}/>
    <div className={modalOpen ? 'border-0' : "w-full gap-y-2 flex flex-col justify-center rounded-2xl  p-6 md:p-10 lg:p-14 mx-auto mt-10 md:w-[400px] lg:w-[500px]"}>
      <h1 className="text-[25px] font-semibold pb-6 mt-14 px-10 text-left  md:text-center">Log <span className="text-[#333] ">in</span></h1>
     <ToastContainer />
      <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 justify-center items-center">
        <input type="email" placeholder="Enter Your Email" required
        onChange={handleChange}
        name="email"
        className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
         placeholder:text-black placeholder:font-semibold bg-gray-50" />
         <div className="flex justify-between items-center pr-4 h-[50px] bg-gray-50 w-[328px] rounded-md">
        <input type={showPassword ? "text": "password"} placeholder="Password" required
        onChange={handleChange}
        name="password"
        autoComplete="current-password"
        className="h-[50px] rounded-md p-2 px-5 outline-0
         placeholder:text-black placeholder:font-semibold bg-gray-50" />
         <span onClick={togglePassword} className="text-[#333] cursor-pointer">
           {passToggle}
         </span>
         </div>
       
      <button type="submit" className="w-[328px] py-[20px] cursor-pointer bg-[#333] hover:bg-white rounded-3xl
       text-white hover:text-black hover:border-2 hover:border-[#F3F5FF]">Continue</button>
      </form>
      <div className="flex flex-col gap-y-2 mt-4">
        <Link to='/forgot-password' className="text-center text-blue-600">Forgot Password</Link>
        <p className="text-center">Don&apos;t have account ? <button 
        className="text-blue-500 cursor-pointer" onClick={modalOpen ? ()=>setOpenModal(true) : ()=>goto()}>Sign Up</button></p>
    </div>
    </div>
    </div>
    }

    <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
    <AccountType modalOpen/>
    </Modal>
  </div>
)
  
}

export default Login
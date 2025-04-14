import { useContext,  useState } from "react"
import Loader from "../Loader"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { toast, ToastContainer } from "react-toastify"
import { Link,  useNavigate } from "react-router-dom"
import { UserContext } from "../UserContext"


const Login = () => {
    const {url} = useContext(UserContext)
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [formdata, setFormdata] = useState({
        email: '',
        password: ''
    })
    

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
                console.log(data);
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

    
  return (
    <div>
    {loading ? <Loader /> :
    <>
    {/* <h4 className="font-semibold text-right pr-10 mt-4 md:hidden">Back &gt;</h4> */}
    <div className="w-full gap-y-2 flex flex-col justify-center border-2 border-[#dfe4fc] 
      rounded-2xl shadow-md p-6 md:p-10 lg:p-14 mx-auto mt-10 md:w-[400px] lg:w-[500px]">
      <h1 className="text-[25px] font-semibold pb-6 mt-14 px-10 md:text-center">Log <span className="text-[#EA1588] ">in</span></h1>
     <ToastContainer />
      <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-4 justify-center items-center">
        <input type="email" placeholder="Enter Your Email" required
        onChange={handleChange}
        name="email"
        className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
         placeholder:text-black placeholder:font-semibold bg-[#FFF5F6]" />
         <div className="flex justify-between items-center pr-4 h-[50px] bg-[#FFF5F6] w-[328px] rounded-md">
        <input type={showPassword ? "text": "password"} placeholder="Password" required
        onChange={handleChange}
        name="password"
        autoComplete="current-password"
        className="h-[50px] rounded-md p-2 px-5 outline-0
         placeholder:text-black placeholder:font-semibold bg-[#FFF5F6]" />
         <span onClick={togglePassword} className="text-[#EA1588] cursor-pointer">
           {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
         </span>
         </div>
       
      <button type="submit" className="w-[328px] py-[20px] cursor-pointer bg-[#EA1588] hover:bg-white rounded-3xl text-black hover:border-2 hover:border-[#F3F5FF]">Continue</button>
      </form>
        <Link to='/forgot-password' className="text-center text-[#EA1588]">Forgot Password</Link>
        <p className="text-center">Don&apos;t have account ? <Link to='/account-type' className="text-[#EA1588]">Sign Up</Link></p>
    </div>
    </>
    }
  </div>
)
  
}

export default Login
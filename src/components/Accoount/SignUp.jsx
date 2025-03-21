import { useContext, useState } from "react"
// import { Link } from "react-router-dom";
import { RoleContext } from "../context/RoleContext";
import Loader from "../Loader";
import { toast, ToastContainer } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { UserContext } from "../UserContext";
import { Link, useNavigate } from "react-router-dom";


const SignUp = () => {
  const {url} = useContext(UserContext)
  const {role} = useContext(RoleContext)
  const [loading, setLoading] = useState(false)
const navigate = useNavigate()
if(role === ''){
  navigate('/account-type')
}

  const [formdata, setFormdata] = useState({
    userType: role ,
    username: '',
    email: '',
    password: ''
  })
  
  const [showPassword, setShowPassword] = useState(false)


    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata(prevData => ({
    ...prevData,
    [name]: value,  
   
    }));
  }
 
// !!!!!!!!!!-------------------------------------- FUCTION TO HANDLE SUBMIT --------------------------------------!!!!!!!!!!
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formdata.role === '') {
      setFormdata(prevData => ({
        ...prevData,
        userType: role 
      }));
    }
  
    console.log("Submitting data:", formdata); 
    // console.log(formdata);

    try {
      setLoading(true)
      const response = await fetch(`${url}user/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formdata)
      }) 

      if(response.ok){
        const data = await response.json();
        setLoading(false)
        toast.success(data.message)
      } 
      else {
        const data = await response.json();
       console.log(data.error);
        setLoading(false)
        toast.error(data.error)
      }

    } catch (error) {
      loading(false)
      console.log(error);
      
      
    }
  }


  return (

// !!!!!!!!!!-------------------------------------- CONTENT BODY --------------------------------------!!!!!!!!!!

    <div>
      {loading ? <Loader /> :
      <>
      {/* <h4 className="font-semibold text-right pr-10 mt-4 md:hidden">Back &gt;</h4> */}
      <div className="w-full gap-y-2 flex flex-col justify-center">
        <h1 className="text-[25px] font-semibold pb-6 mt-14 px-10 md:text-center">Create <span className="text-[#EA1588] ">Account</span></h1>
       
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-4 justify-center items-center">
          <input type="text" placeholder="Username" required
          onChange={handleChange}
          name="username"
          className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
           placeholder:text-black placeholder:font-semibold bg-[#FFF5F6]" />
          <input type="email" placeholder="Enter Your Email" required
          onChange={handleChange}
          name="email"
          className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
           placeholder:text-black placeholder:font-semibold bg-[#FFF5F6]" />
         <div className="flex justify-between items-center pr-4 h-[50px] bg-[#FFF5F6] w-[328px] rounded-md">
                 <input type={showPassword ? "text": "password"} placeholder="Password" required
                 onChange={handleChange}
                 name="password"
                 className="h-[50px] rounded-md p-2 px-5 outline-0
                  placeholder:text-black placeholder:font-semibold bg-[#FFF5F6]" />
                  <span onClick={togglePassword} className="text-[#EA1588] cursor-pointer">
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                  </div>
         <ToastContainer />
        <button type="submit" className="w-[328px] py-[20px] cursor-pointer bg-[#EA1588] hover:bg-white rounded-3xl text-black hover:border-2 hover:border-[#F3F5FF]">Continue</button>
        </form>
          <Link to='/login'> <p className="text-center">Already have an account ? <span className="text-[#EA1588]">Login</span></p></Link>
        
      </div>
      </>
      }
    </div>
  )
}

export default SignUp
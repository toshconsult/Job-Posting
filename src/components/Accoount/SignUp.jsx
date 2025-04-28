import {  useState } from "react"
// import { Link } from "react-router-dom";
import { RoleContext } from "../context/RoleContext";
import Loader from "../Loader";
import { toast, ToastContainer } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import useUserStore from "../context/Store";


const SignUp = ({modalOpen }) => {
  const {url} = useUserStore()
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

    if(formdata.username.length > 8){
      toast.error("Username cannot be longer than 8 characters")
      return
    }
  
    console.log("Submitting data:", formdata.username); 
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
        navigate('/login')
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

<div className={modalOpen ? "w-full h-full" : "flex justify-center items-center min-h-screen"}>
      {loading ? <Loader /> :
      <>
      {/* <h4 className="font-semibold text-right pr-10 mt-4 md:hidden">Back &gt;</h4> */}
      <div className={modalOpen ? 'border-0' :"flex h-full md:h-[90vh] w-[98%]  md:w-[70%] mx-auto justify-center border-2 border-[#dfe4fc] rounded-2xl shadow-md items-center "}>
      <img src="https://img.freepik.com/premium-photo/portrait-confident-male-person-as-contractor-outdoors-developing-planning-construction-projects-professional-architect-industry-safety-with-arms-crossed-development_590464-347760.jpg?ga=GA1.1.1994411634.1732195402&semt=ais_hybrid&w=740"
     className={modalOpen ? 'hidden' :" h-full w-[45%] object-fit rounded-2xl hidden md:flex"}/>
    <div className={modalOpen ? 'border-0' : "w-full gap-y-2 flex flex-col justify-center rounded-2xl  p-6 md:p-10 lg:p-14 mx-auto mt-10 md:w-[400px] lg:w-[500px]"}>
        <h1 className="text-[25px] font-semibold pb-6 mt-14 px-10 md:text-center">Create <span className="text-[#333] ">Account</span></h1>
       
        <form 
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-4 justify-center items-center">
          <input type="text" placeholder="Username" required
          onChange={handleChange}
          name="username"
          className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
           placeholder:text-black placeholder:font-semibold bg-gray-50" />
          <input type="email" placeholder="Enter Your Email" required
          onChange={handleChange}
          name="email"
          className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
           placeholder:text-black placeholder:font-semibold bg-gray-50" />
         <div className="flex justify-between items-center pr-4 h-[50px] bg-gray-50 w-[328px] rounded-md">
                 <input type={showPassword ? "text": "password"} placeholder="Password" required
                 onChange={handleChange}
                 name="password"
                 className="h-[50px] rounded-md p-2 px-5 outline-0
                  placeholder:text-black placeholder:font-semibold bg-gray-50" />
                  <span onClick={togglePassword} className="text-[#333] cursor-pointer">
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </span>
                  </div>
         <ToastContainer />
        <button type="submit" className="w-[328px] py-[20px] cursor-pointer bg-[#333] hover:bg-white rounded-3xl text-black hover:border-2 hover:border-[#F3F5FF]">Continue</button>
        </form>
          <Link to='/login'> <p className="text-center">Already have an account ? <span className="text-blue-600">Login</span></p></Link>
        
      </div>
      </div>
      </>
      }
    </div>
    
  )
}

export default SignUp
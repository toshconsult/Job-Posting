
import { useNavigate } from "react-router-dom"
import { RoleContext } from "../context/RoleContext"
import { useContext } from "react"



export const AccountType = ({modalOpen}) => {
    const {setRole} = useContext(RoleContext)
    const navigate = useNavigate()

    const handleRole = (selectedRole) => {
        setRole(selectedRole)
        navigate('/register')
       
        
    }
  return (
    

    <div className={modalOpen ? "w-full h-full" : "flex justify-center items-center min-h-screen"}>
      
      <div className={modalOpen ? 'border-0' :"flex h-full md:h-[90vh] w-[98%]  md:w-[70%] mx-auto justify-center border-2 border-[#dfe4fc] rounded-2xl shadow-md items-center "}>
      <img src="https://img.freepik.com/premium-photo/portrait-confident-male-person-as-contractor-outdoors-developing-planning-construction-projects-professional-architect-industry-safety-with-arms-crossed-development_590464-347760.jpg?ga=GA1.1.1994411634.1732195402&semt=ais_hybrid&w=740"
     className={modalOpen ? 'hidden' :" h-full w-[45%] object-fit rounded-2xl hidden md:flex"}/>
     <div>
    <div className={modalOpen ? 'border-0 text-center my-5' : "w-full gap-y-2 flex flex-col text-center justify-center rounded-2xl  p-6 md:p-10 lg:p-14 mx-auto md:mt-10 md:w-[400px] lg:w-[500px]"}>
       
            <h1 className="text-[25px] font-semibold ">Choose  <span className="text-[#333] ">Account Type</span></h1>
            <p>Select your account type for best experience.</p>
            </div>
        <form>
            <div className="flex flex-col pb-4  gap-y-4 justify-center items-center">
                <button type="button" 
                onClick={()=> handleRole('client')}
                className="w-[328px] py-[20px] border-2 hover:bg-[#333] hover:text-white cursor-pointer
                border-[#F3F5FF] rounded-3xl text-black"><h2 className="font-semibold text-2xl">As a client</h2>
                <p>Sign Up as a client</p></button>
                <button type="button" 
                onClick={() => handleRole('tasker')}
                className="w-[328px] py-[20px] border-2 hover:bg-[#333] hover:text-white cursor-pointer
                border-[#F3F5FF] rounded-3xl text-black"><h2 className="font-semibold text-2xl">As a tasker</h2>
                <p>Sign Up as a tasker</p></button>
                
            </div>
        </form>
        </div>
        </div>
    </div>
    
  )
}

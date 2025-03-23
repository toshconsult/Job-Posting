
import { useNavigate } from "react-router-dom"
import { RoleContext } from "../context/RoleContext"
import { useContext } from "react"



export const AccountType = () => {
    const {setRole} = useContext(RoleContext)
    const navigate = useNavigate()

    const handleRole = (selectedRole) => {
        setRole(selectedRole)
        navigate('/register')
       
        
    }
  return (
    

    <div>
        {/* <h4 className="font-semibold text-right pr-10 mt-4 md:hidden">Back &gt;</h4> */}

        <div className="w-full gap-y-2 flex flex-col justify-center md:mt-14">
            <div className="pb-6 mt-12 px-10 md:text-center">
            <h1 className="text-[25px] font-semibold ">Choose  <span className="text-[#EA1588] ">Account Type</span></h1>
            <p>Select your account type for best experience.</p>
            </div>
        <form>
            <div className="flex flex-col gap-y-4 justify-center items-center">
                <button type="button" 
                onClick={()=> handleRole('client')}
                className="w-[328px] py-[20px] border-2 hover:bg-[#EA1588] hover:text-white cursor-pointer
                border-[#F3F5FF] rounded-3xl text-black"><h2 className="font-semibold text-2xl">As a client</h2>
                <p>Sign Up as a client</p></button>
                <button type="button" 
                onClick={() => handleRole('tasker')}
                className="w-[328px] py-[20px] border-2 hover:bg-[#EA1588] hover:text-white cursor-pointer
                border-[#F3F5FF] rounded-3xl text-black"><h2 className="font-semibold text-2xl">As a tasker</h2>
                <p>Sign Up as a tasker</p></button>
                
            </div>
        </form>
        </div>
       
    </div>
    
  )
}

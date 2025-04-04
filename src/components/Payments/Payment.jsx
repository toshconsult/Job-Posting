import { useContext, useState } from "react"
import { PaystackButton } from 'react-paystack'
import { UserContext } from "../UserContext"
import { toast, ToastContainer } from "react-toastify"

const Payment = () => {
  
  const publicKey = "pk_test_f7fd4dba18436a90b7ebde95b7b7b435e3a539a9"
  const [amount, setAmount] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
     
  const componentProps = {
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Fund",
    onSuccess: () =>
      toast.success('Your account funded Successfully') ,
    onClose: () => toast.error('Payment cancelled'),
  }

  return (
    <div className="flex flex-col items-center md:items-start px-4 md:px-20">
      
          <h1>Fund Your <span className="text-[#EA1588]">Wallet</span></h1>
          <form  className="w-full max-w-2xl">
            <ToastContainer />
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-[#333] font-semibold">
                  Your name:                                                                                                                          
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Enter your full name"
                  onChange={(e)=>setName(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>
              </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="text-[#333] font-semibold">
                  Your Email:                                                                                                                          
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e)=>setEmail(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>
              </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="amountr" className="text-[#333] font-semibold">
                  Amount:                                                                                                                          
                </label>
                <input
                  type="text"
                  id="amount"
                  value={amount}
                  placeholder="Enter the funding amount"
                  onChange={(e)=>setAmount(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>
              </div>
            <div className="space-y-4">
              <div>
                <label htmlFor="phone" className="text-[#333] font-semibold">
                  Phone No.:                                                                                                                          
                </label>
                <input
                  type="number"
                  id="phone"
                  value={phone}
                  placeholder="Enter your phone number"
                  onChange={(e)=>setPhone(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>
              </div>
              </form>
              

              <div className="flex justify-center mt-6">
  <PaystackButton 
    {...componentProps} 
    className="w-[328px] max-w-xs py-2 bg-[#EA1588] text-white rounded-3xl hover:bg-white hover:text-[#EA1588] hover:border-2 hover:border-[#EA1588] transition-all"
  />
</div>

    </div>
  )
}

export default Payment
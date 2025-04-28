import {   useState } from "react"
import { PaystackButton } from 'react-paystack'
import { toast, ToastContainer } from "react-toastify"
import { UserContext } from "../context/UserContext"
import ClientSideBar from "../Clients/ClientSideBar"
import Sidebar from "../SideBar"

const FundWallet = () => {
  const {url, userToken, user} = useUserStore()
  const publicKey = "pk_test_f7fd4dba18436a90b7ebde95b7b7b435e3a539a9"
  const [amount, setAmount] = useState("")
  const email = user?.email
  const name = user?.username 
  const [phone, setPhone] = useState("")
  const [loading, setLoading] = useState(false)

  const handlePaystackSuccessAction = async(reference, amount) => {
    // console.log(reference);
    // console.log(amount);
    setLoading(true)
    const sendtobackend = await fetch(`${url}user/fund-wallet`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${userToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        amount: amount / 100,
        reference
      })
    })

    if(sendtobackend.ok) {
      const data = await sendtobackend.json()
      setLoading(false)  
      console.log(data);
      toast.success(data.message)
      setAmount("")
      setPhone("")
    }else {
      const error = await sendtobackend.json()
      toast.error(error.error)
      setLoading(false)
    }
  };
     
  const componentProps = {
    reference: (new Date()).getTime().toString(),
    email,
    amount: amount * 100,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: loading ? "Funding" : "Fund",
    onSuccess: async()=> handlePaystackSuccessAction(componentProps.reference, componentProps.amount),
    onClose: () => toast.error('Payment cancelled'),
  }

  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
{user?.userType === "client" ? <ClientSideBar /> : <Sidebar />}
   
    <div className="mt-4 space-y-4 md:px-10 w-full">
          <h1 className="text-lg font-semibold mb-8 pl-14 md:pl-0">Fund Your <span className="text-[#333]">Wallet</span></h1>
          <form  className="w-full max-w-2xl">
            <ToastContainer />
           
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
                  className="w-full bg-gray-50 h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
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
                  className="w-full bg-gray-50 h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>
              </div>
              </form>
              

              <div className="flex justify-center mt-6">
  <PaystackButton 
    {...componentProps} 
    className="w-[328px] max-w-xs py-2 bg-[#333] text-white rounded-3xl hover:bg-white hover:text-[#333] hover:border-2 hover:border-[#333] transition-all"
  />
</div>

    </div>
    </div>
  )
}

export default FundWallet
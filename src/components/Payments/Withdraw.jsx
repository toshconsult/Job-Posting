import {  useEffect, useState } from "react"
import useUserStore from "../context/Store";

import Loader from "../Loader";
import { toast, ToastContainer } from "react-toastify";
import ClientSideBar from "../Clients/ClientSideBar";
import Sidebar from "../SideBar";

const Withdraw = () => {

    const {url, userToken, user} = useUserStore()
    const [loading, setloading] = useState(false)
    const [banks, setbanks] = useState([])
    const [accountNmber, setAccountNumber] = useState('')
    const [bankCode, setBankCode] = useState('')
    const [amount, setAmount] = useState('')
    const [pin, setPin] = useState('')

    useEffect(()=>{ 
    const getbanks = async ()=>{
        const response = await fetch(`${url}user/fetch-supported-banks`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'Content-Type': 'application/json'
          }
        })

        if(response.ok) {
          const data = await response.json()
          setbanks(data)
        
        }
        
    }

   
        getbanks()
    }
    ,[url, userToken])

const withdraw = async (e)=>{
e.preventDefault()

if(amount < 1000){
  toast.error("Minimum withdraw is 10000")
  return
}

if(accountNmber.length < 10){
  toast.error("Please enter a valid account number")
  return
}
  setloading(true)
  const response = await fetch(`${url}user/wallet-withdrawal`, {
    method: 'POST', 
    headers: {
      'Authorization': `Bearer ${userToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      accountNmber: accountNmber,
      bankCode: bankCode,
      amount: amount,
      pin: pin
    })
  })
  if(response.ok) {
    const data = await response.json()
    // console.log(data)
    toast.success(data.message)
    setloading(false)
  } else {
    const error = await response.json()
    toast.error(error.error)
    setloading(false)
  }
 

}

  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      {user?.userType === "client" ? <ClientSideBar /> : <Sidebar />}
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 space-y-4 md:px-10 w-full">
          <h1 className="text-lg font-semibold mb-8 pl-14 md:pl-0">
            Enter Your <span className="text-[#333]">Bank Details</span>
          </h1>
          <form onSubmit={withdraw} className="w-full max-w-2xl">
            <ToastContainer />
            <div className="space-y-4">
              <div>
                <label htmlFor="bankCode" className="text-[#333] font-semibold">
                Select Bank
                </label>
               <select onChange={(e)=>setBankCode(e.target.value)}
                  className="w-full  bg-gray-50 h-[50px]  rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
               
               >
                <option value="" disabled selected>Select Bank</option>
                {banks?.map((bank, index) => (
                  <option key={index} value={bank.code}>
                    {bank.name}
                  </option>
                ))}
               </select>
              </div>
              </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="accountNumber" className="text-[#333] font-semibold">
                  Account Number
                </label>
                <input
                  type="number"
                 
                  // value={title}
                  placeholder="Enter Account Number"
                  onChange={(e)=>setAccountNumber(e.target.value)}
                  className="w-full  bg-gray-50 h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>
              </div>

              <div className="space-y-4">
              <div>
                <label htmlFor="amount" className="text-[#333] font-semibold">
                  Amount
                </label>
                <input
                  type="number"
                 
                  // value={title}
                  placeholder="Enter Amount"
                  onChange={(e)=>setAmount(e.target.value)}
                  className="w-full bg-gray-50 h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>
              </div>

              <div className="space-y-4">
              <div>
                <label htmlFor="Pin" className="text-[#333] font-semibold">
                  Pin
                </label>
                <input
                  type="password"
                 
                  // value={title}
                  placeholder="Enter Pin"
                  onChange={(e)=>setPin(e.target.value)}
                  className="w-full  bg-gray-50 h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>
              </div>
              <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full max-w-xs py-4 bg-[#333] text-white rounded-3xl hover:bg-white hover:text-[#333] hover:border-2 hover:border-[#333] transition-all"
              >
                Withdraw
              </button>
            </div>
              </form>
              </div>
      )}
              </div>
             

  )
}

export default Withdraw
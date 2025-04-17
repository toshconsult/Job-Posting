import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserContext";
import Loader from "../Loader";
import { toast, ToastContainer } from "react-toastify";

const Withdraw = () => {

    const {url, userToken} = useContext(UserContext)
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

        if(!response.ok) {
            throw new Error('Failed to fetch data')
        }
        const data = await response.json()
        // console.log(data)
        setbanks(data)
    }

   
        getbanks()
    }
    ,[url, userToken])

const withdraw = async (e)=>{
e.preventDefault()

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
    console.log(data)
    setloading(false)
  } else {
    const error = await response.json()
    toast.error(error.error)
    setloading(false)
  }
 

}

  return (
    <div className="flex flex-col items-center md:items-start px-4 md:px-20">
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className="text-[25px] pb-6 mt-14 md:text-center">
            Enter Your <span className="text-[#EA1588]">Bank Details</span>
          </h1>
          <form onSubmit={withdraw} className="w-full max-w-2xl">
            <ToastContainer />
            <div className="space-y-4">
              <div>
                <label htmlFor="bankCode" className="text-[#333] font-semibold">
                Select Bank
                </label>
               <select onChange={(e)=>setBankCode(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
               
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
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
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
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>
              </div>

              <div className="space-y-4">
              <div>
                <label htmlFor="Pin" className="text-[#333] font-semibold">
                  Pin
                </label>
                <input
                  type="number"
                 
                  // value={title}
                  placeholder="Enter Pin"
                  onChange={(e)=>setPin(e.target.value)}
                  className="w-full h-[50px] rounded-md p-2 px-5 outline-0 border-2 border-[#F3F5FF] placeholder:text-gray-500"
                />
              </div>
              </div>
              <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="w-full max-w-xs py-4 bg-[#EA1588] text-white rounded-3xl hover:bg-white hover:text-[#EA1588] hover:border-2 hover:border-[#EA1588] transition-all"
              >
                Withdraw
              </button>
            </div>
              </form>
              </>
      )}
              </div>
             

  )
}

export default Withdraw
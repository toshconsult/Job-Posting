
import { useEffect, useState } from "react";
import useUserStore from "../context/Store";

import ClientSideBar from "./ClientSideBar";


export default function ClientWallet() {
  
const  {balance, userToken, url} = useUserStore()
const [transactions, setTransactions] = useState(null)

  
    const getTransaction = async ()=>{
      const res =  await fetch(`${url}user/transactions`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userToken}`,
          
        }
      })
  
      if(res.ok){
        const data = await res.json()
        setTransactions(data.trx)
        // console.log(data)
      } else{
        const err = await res.json()
        console.log(err)
      }
    }
    useEffect(()=>{
    getTransaction()
    }, [])
  

    return (
        <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
       <ClientSideBar />
        <div className="mt-4 space-y-4 md:px-10 w-full">
        <h2 className="text-lg font-semibold mb-8 pl-14 ">Wallet</h2>
         
        <div className="mb-6">
          <div className="bg-[#333] text-white text-center py-6 rounded-lg mt-2">
            <p className="text-sm">Total Balance</p>
           {balance ?  <p className="text-3xl font-bold">{`₦${balance?.toLocaleString('en-NG', { minimumFractionDigits: 2 })}`}</p> : 'Loading..'}
          </div>
        </div>
        
       
        <div className="flex gap-4 mb-6">
          <button className="flex-1 flex items-center justify-center hover:bg-[#333] hover:text-white border cursor-pointer border-gray-300 rounded-lg py-2 text-gray-800">
          <a href='/fund-wallet'> Fund Account </a>
          </button>
          <button className="flex-1 flex items-center justify-center cursor-pointer hover:bg-[#f2f2f2]
           hover:text-[#333] hover:border hover:border-gray-300 bg-[#333] text-white rounded-lg py-2">
            <a href='/withdraw'>  Withdraw</a>
          </button>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Spending History</h3>
          <div className="max-w-xl mx-auto mt-8">
      <table className="w-full text-sm rounded-lg overflow-hidden" style={{ backgroundColor: '#f2f2f2' }}>
        <tbody>
          <th className="text-start">Detail</th>
          <th>Amount</th>
          <th>Type</th>
          <th>Date</th>
          <th>Status</th>
          {/* <th>Reference</th> */}
          {transactions?.map((trx, i) => (
            <tr key={i} className="border-b my-2 border-gray-300">
              <td className="">{trx.details}</td>
              <td className={`${trx.TransactionType === "credit" ? 'text-green-500' : 'text-red-600'} text-center py-3 px-2 font-semibold`}>
             {trx.TransactionType === "credit" ? `+₦${trx?.amount}` :`-₦${trx?.amount}`}
             </td>
             <td className={`${trx.TransactionType === "credit" ? 'text-green-500' : 'text-red-600'} text-center py-3 px-2 w-5 font-semibold`}>
              {trx?.TransactionType}
             </td>
             {/* date */}
             <td>{new Date(trx.createdAt).toLocaleDateString()}</td>

              <td className={`${trx.TransactionStatus === "completed" ? 'text-green-500' : 'text-red-600'} text-center py-3 px-2 w-5 font-semibold`} >
               {trx?.TransactionStatus}
              </td>
              

             
             {/* <td>{trx.reference_number}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
        </div>
      </div>
      </div>
    );
  }
  
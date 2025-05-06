import { useEffect } from "react";
import useAdminStore from "../components/context/AdminStore";
import AdminSidebar from "./SideBar";


const TransactionsTable = () => {

  const {trx, getTrx} = useAdminStore()

  useEffect(()=>{
    if(!trx){
      getTrx()
    }
  }, [])
  console.log(trx);
  

  return (
     <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
          
        <AdminSidebar />
        <div className="mt-4 space-y-4 md:px-10 w-full">
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Transactions</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200 rounded-md">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Details</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Reference</th>
            </tr>
          </thead>
          <tbody>
            {trx?.map((txn, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{new Date(txn.createdAt).toLocaleDateString()}</td>
                <td className="px-4 py-3">{txn.details}</td>
                <td className="px-4 py-3">{txn.TransactionStatus}</td>
                <td className="px-4 py-3">₦{txn?.amount?.toLocaleString()}</td>
                <td className={`px-4 py-3 font-medium ${txn.TransactionType === 'credit' ? 'text-green-600' : 'text-red-500'}`}>{txn.TransactionType}</td>
                <td className="px-4 py-3">{txn.reference_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
};

export default TransactionsTable;

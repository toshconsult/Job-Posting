import AdminSidebar from "./SideBar";


const TransactionsTable = () => {
  const transactions = [
    {
      date: '2025-03-25',
      details: 'Task Payment - Fix Air Conditioner',
      username: 'johndoe',
      amount: 30000,
      type: 'Credit',
      reference: 'TXN-001',
    },
    {
      date: '2025-03-26',
      details: 'Withdrawal',
      username: 'janesmith',
      amount: 15000,
      type: 'Debit',
      reference: 'TXN-002',
    },
    {
      date: '2025-03-27',
      details: 'Task Payment - Website Redesign',
      username: 'markdev',
      amount: 50000,
      type: 'Credit',
      reference: 'TXN-003',
    },
  ];

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
              <th className="px-4 py-3">Username</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Reference</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((txn, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{txn.date}</td>
                <td className="px-4 py-3">{txn.details}</td>
                <td className="px-4 py-3">{txn.username}</td>
                <td className="px-4 py-3">₦{txn.amount.toLocaleString()}</td>
                <td className={`px-4 py-3 font-medium ${txn.type === 'Credit' ? 'text-green-600' : 'text-red-500'}`}>{txn.type}</td>
                <td className="px-4 py-3">{txn.reference}</td>
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

// src/components/TasksTable.jsx

import AdminSidebar from "./SideBar";

const TasksTable = () => {
  const tasks = [
    {
      title: 'Fix Air Conditioner',
      client: 'John Doe',
      amount: 30000,
      date: '2025-03-22',
    },
    {
      title: 'Website Redesign',
      client: 'Jane Smith',
      amount: 50000,
      date: '2025-03-21',
    },
    {
      title: 'Plumbing Repair',
      client: 'Mark Dev',
      amount: 20000,
      date: '2025-03-20',
    },
  ];

  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
      
    <AdminSidebar />
    <div className="mt-4 space-y-4 md:px-10 w-full">
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Tasks</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border border-gray-200 rounded-md">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
            <tr>
              <th className="px-4 py-3">Task Title</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="border-t hover:bg-gray-50">
                <td className="px-4 py-3">{task.title}</td>
                <td className="px-4 py-3">{task.client}</td>
                <td className="px-4 py-3">₦{task.amount.toLocaleString()}</td>
                <td className="px-4 py-3">{task.date}</td>
                <td className="px-4 py-3 text-center">
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs hover:bg-red-600">
                    Delete
                  </button>
                </td>
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

export default TasksTable;

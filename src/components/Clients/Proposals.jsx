import { useEffect, useState,  } from "react";
import useUserStore from "../context/Store";

import { Link, useParams } from "react-router-dom";
import ClientSideBar from "./ClientSideBar";

const Proposals = () => {
  const { url, userToken } = useUserStore();
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log(proposals);
  
  const maxContent = 200

  const {id} = useParams()
  localStorage.setItem('taskId', id)
  useEffect(()=>{
    const fetchProposals = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${url}client/task/${id}/applicants`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${userToken}`,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setProposals(data.applicants);
        } else {
          console.error("Error fetching proposals");
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProposals();
  }, [id, url, userToken]);

 

  return (
    <div className="flex mx-4 md:mx-0 ustify-center md:justify-normal min-h-screen md:gap-72">
       <ClientSideBar />
        <div className="mt-4 space-y-4 md:px-10 w-full">
      <h2 className="text-xl font-semibold mb-4">Proposals</h2>

      {loading ? (
        <p className="text-gray-600">Loading proposals...</p>
      ) : proposals.length === 0 ? (
        <p className="text-gray-600">No proposals yet.</p>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {proposals.map((proposal) => (
            <div
              key={proposal._id}
              className="p-4 bg-gray-100 rounded-lg border border-gray-200"
            >
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 text-white font-bold text-lg w-10 h-10 flex items-center justify-center rounded-full">
                  {proposal.tasker.username.charAt(0).toUpperCase()}
                </div>
                <h3 className="text-lg font-semibold">{proposal.tasker.username}</h3>
              </div>

              
              <p className="text-gray-600 mt-2">{proposal.description.length > maxContent ? 
                <>{proposal.description.slice(0, maxContent)} <i
                >.....</i> </>
              : proposal.description }</p>
        <Link to={`/single-proposal/${proposal._id}`} className="text-blue-700 cursor-pointer">View</Link>
             
              <p className="text-gray-500 text-sm mt-1">
                {new Date(proposal.date).toLocaleDateString()}
              </p>

              
              <div className="mt-3 flex justify-between items-center">
                <p className="text-green-600 font-bold">₦{proposal.price}</p>
                <span
                  className={`px-3 py-1 rounded-full text-white text-sm ${
                    proposal.status === "pending"
                      ? "bg-yellow-500"
                      : proposal.status === "accepted"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {proposal.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      </div>
    </div>
  );
};

export default Proposals;

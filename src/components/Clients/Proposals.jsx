import { useEffect, useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";

const Proposals = () => {
  const { url, userToken } = useContext(UserContext);
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
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
            Authorization: `Bearer ${userToken}`,
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

  function showFllContect(){
    navigate(`/single-proposal/${id}`)
    
}

  return (
    <div className="max-w-5xl mx-auto bg-white p-6 rounded-xl mt-6">

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
        <button onClick={showFllContect} className="text-blue-700">View</button>
             
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
  );
};

export default Proposals;

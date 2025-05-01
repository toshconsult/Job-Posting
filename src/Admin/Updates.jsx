import { useState } from "react";

const PostUpdate = () => {
    const [update, setUpdate] = useState('');

    const handlePost = () => {
      alert(`Update posted: ${update}`);
      setUpdate('');
    };
  
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-4">Post Update</h2>
        <textarea
          className="w-full border rounded-md p-2 mb-2"
          rows={3}
          placeholder="Write an update..."
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
        />
        <button
          onClick={handlePost}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Post
        </button>
      </div>
    );
  };
  
  export default PostUpdate;
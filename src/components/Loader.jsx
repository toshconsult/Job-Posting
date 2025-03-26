
const Loader = () => {
  return (
    <div className="w-full bg-white fixed inset-0 z-50 gap-x-2 flex justify-center items-center h-screen">
      <div className="w-5 bg-blue-800 animate-pulse h-5 rounded-full animate-bounce" />
      <div className="w-5 animate-pulse h-5 bg-[#EA1588] rounded-full animate-bounce" />
      <div className="w-5 h-5 animate-pulse bg-[#6756cc] rounded-full animate-bounce" />
    </div>
  );
}

export default Loader;

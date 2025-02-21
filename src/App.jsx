import Loader from "./components/Loader"

function App() {


  return (
    <div className="w-full gap-y-2 flex justify-center items-center h-screen flex-col">
      <h1 className="font-semibold text-[31px]"><span className="text-blue-800">Air</span><span className="text-[#EA1588]">Rand</span> </h1>
      <Loader />
    </div>
  )
}

export default App


import { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify"
import { UserContext } from "../UserContext";
import Loader from '../Loader'
import skills from '/src/components/Skills.jsx'


const Interest = () => {
  const {url} = useContext(UserContext)
  const [click, setClick] = useState(null);
  const [clickvalue, setClickValue] = useState(null);
  const [selectedSkills, setSelectedSkills] = useState([])
  const userToken = localStorage.getItem('token')
  const [loading, setLoading] = useState(false)
  console.log(selectedSkills);
  console.log(userToken);
  


  const addSkills = async ()=>{
    setLoading(true)
  const response = await fetch(`${url}user/update-profile`, {
          method: 'PATCH',
          headers: {
            'Authorization': `Bearer ${userToken}`,
            'content-type': 'application/json'
          },
          body: JSON.stringify({skillsets:selectedSkills})
         })
         if (response.ok){
          const data = await response.json()
          setLoading(false)
          console.log(data);
          toast.success('Skills updated Successfully')
          window.location.href = '/update-profile'
          
         } else {
          const error = await response.json()
          console.log(error);
          setLoading(false)
          toast.error(error.error)
         }
        }

    // Reset selected checkboxes when `click` changes
    useEffect(() => {
      setSelectedSkills([]);
    }, [click]);
  
    const handleCheckboxChange = (item) => {
      setSelectedSkills((prev) =>
        prev.includes(item) ? prev.filter((skill) => skill !== item) : [...prev, item]
      );
    };

  const handleClick = (index, e) => {
    setClick(index);
    setClickValue(e);
  };

  
  const buttons = [
    "Photograph",
    "Furniture",
    "Barber",
    "Electrician",
    "Painter",
    "Baker",
    "Cleaning",
    "Tutoring",
  ];
  // const states = [
  //   "Abia",
  //   "Adamawa",
  //   "Akwa Ibom",
  //   "Anambra",
  //   "Bauchi",
  //   "Bayelsa",
  //   "Benue",
  //   "Borno",
  //   "Cross River",
  //   "Delta",
  //   "Ebonyi",
  //   "Edo",
  //   "Ekiti",
  //   "Enugu",
  //   "Gombe",
  //   "Imo",
  //   "Jigawa",
  //   "Kaduna",
  //   "Kano",
  //   "Katsina",
  //   "Kebbi",
  //   "Kogi",
  //   "Kwara",
  //   "Lagos",
  //   "Nasarawa",
  //   "Niger",
  //   "Ogun",
  //   "Ondo",
  //   "Osun",
  //   "Oyo",
  //   "Plateau",
  //   "Rivers",
  //   "Sokoto",
  //   "Taraba",
  //   "Yobe",
  //   "Zamfara",
  //   "FCT (Abuja)",
  // ];

  return (
    <div>
      {loading ? <Loader /> : <>
      <h1 className="text-[25px] md:text-center font-semibold px-4 pb-2 mt-14">
        Your <span className="text-[#EA1588]">Field</span>
      </h1>
      <ToastContainer />
      <div className="w-full flex flex-col justify-center items-center px-4">
        <p className="pb-6 text-center">
          You can only select one (1) field from the following
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full max-w-[800px]">
          {buttons.map((item, index) => (
            <button
              key={index}
              value={item}
              className={`border border-[#F3F5FF] p-3 rounded-2xl text-center 
            ${click === index ? "bg-[#EA1588] text-white" : ""}`}
              onClick={(e) => handleClick(index, e.target.value)}
            >
              {item}
            </button>
          ))}{" "}
        </div>

        <div className="py-12 max-w-[800px]">
          {clickvalue ? <>

            <h1 className="text-[25px] md:text-center font-semibold px-4 pb-2 mt-2">
        Your <span className="text-[#EA1588]">Skillset</span>
      </h1>
      
        <p className="pb-6 text-center">
          You can select more than one (1) skill from the following
        </p>
            <form className=" w-full grid grid-cols-2 md:grid-cols-4 gap-5  ">
             { skills[click].map((item, i)=> (
              <div key={i} className=" flex items-center border
               border-[#F3F5FF] p-3 rounded-2xl text-center gap-4 min-h-[40px]">
              <label className="flex gap-[20px] cursor-pointer">
                <input type="checkbox"  
                 checked={selectedSkills.includes(item)}
                 onChange={() => handleCheckboxChange(item)}
                />
                {item}
              </label>
              </div>
             ))}
            </form>


            
          </> : ''}
        </div >
          
        <div className="mb-5">
        <button type="submit" className="w-[328px] md:w-[652px] py-[20px] cursor-pointer bg-[#EA1588] text-white
         hover:bg-white rounded-3xl hover:text-black hover:border-2 hover:border-[#F3F5FF]" onClick={addSkills}>Continue</button>
        </div>
      </div>
      </> }
    </div>
  );
};

export default Interest;

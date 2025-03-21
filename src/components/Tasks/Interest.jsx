import { useState } from "react";

const Interest = () => {
  const [click, setClick] = useState(null);
  const handleClick = (index) => {
    setClick(index);
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
  const states = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "FCT (Abuja)",
  ];

  return (
    <div>
      <h1 className="text-[25px] md:text-center font-semibold px-4 pb-2 mt-14">
        Your <span className="text-[#EA1588]">Field</span>
      </h1>
      <div className="w-full flex flex-col justify-center items-center px-4">
        <p className="pb-6 text-center">
          You can only select one (1) field from the following
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 w-full max-w-[800px]">
          {buttons.map((item, index) => (
            <button
              key={index}
              className={`border border-[#F3F5FF] p-3 rounded-2xl text-center 
            ${click === index ? "bg-[#EA1588] text-white" : ""}`}
              onClick={() => handleClick(index)}
            >
              {item}
            </button>
          ))}{" "}
        </div>

        <div>
          <h1 className="text-[25px] md:text-center font-semibold px-4 pb-2 mt-14">
            Your <span className="text-[#EA1588]">Location </span>
          </h1>

          <p className=" px-4">Choose your location</p>

          <select className="border border-[#F3F5FF] p-3 rounded-2xl w-[90vw] md:w-[60vw] my-4 outline-0 px-2">
            <option value="">Select a state</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Interest;

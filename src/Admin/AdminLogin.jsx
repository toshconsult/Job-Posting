import { useEffect, useMemo, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import {  useNavigate } from "react-router-dom";

import Loader from "../components/Loader";
import useAdminStore from "../components/context/AdminStore";

const AdminLogin = () => {
  const { url } = useAdminStore();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const passToggle = useMemo(() => {
    return showPassword ? <FaRegEye /> : <FaRegEyeSlash />;
  }, [showPassword]);

  useEffect(() => {
    localStorage.removeItem("token");
  }, []);

  const navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await fetch(`${url}admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        const token = data.token;
        // localStorage.setItem("token", token);
        localStorage.setItem("adminToken", token);
        toast.success(data.message);
        setLoading(false);
        
          navigate("/admin-dashboard");
        
      } else {
        const data = await response.json();
        toast.error(data.error);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div
      className="flex justify-center items-center min-h-screen"
    >
      {loading ? (
        <Loader />
      ) : (
        <div
          className="flex h-full md:h-[90vh] w-[98%]  md:w-[70%] mx-auto justify-center border-2 border-[#dfe4fc] rounded-2xl shadow-md items-center "
        >
          <img
            src="https://img.freepik.com/premium-photo/portrait-confident-male-person-as-contractor-outdoors-developing-planning-construction-projects-professional-architect-industry-safety-with-arms-crossed-development_590464-347760.jpg?ga=GA1.1.1994411634.1732195402&semt=ais_hybrid&w=740"
            className=" h-full w-[45%] object-fit rounded-2xl hidden md:flex"
           />
          <div
            className="w-full gap-y-2 flex flex-col justify-center rounded-2xl  p-6 md:p-10 lg:p-14 mx-auto mt-10 md:w-[400px] lg:w-[500px]"
          >
            <h1 className="text-[25px] font-semibold pb-6 mt-14 px-10 text-left  md:text-center">
              Log <span className="text-[#333] ">in</span>
            </h1>
            <ToastContainer />
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-y-4 justify-center items-center"
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                onChange={handleChange}
                name="email"
                className="w-[328px] h-[50px] rounded-md p-2 px-5 outline-0
         placeholder:text-black placeholder:font-semibold bg-gray-50"
              />
              <div className="flex justify-between items-center pr-4 h-[50px] bg-gray-50 w-[328px] rounded-md">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  onChange={handleChange}
                  name="password"
                  autoComplete="current-password"
                  className="h-[50px] rounded-md p-2 px-5 outline-0
         placeholder:text-black placeholder:font-semibold bg-gray-50"
                />
                <span
                  onClick={togglePassword}
                  className="text-[#333] cursor-pointer"
                >
                  {passToggle}
                </span>
              </div>

              <button
                type="submit"
                className="w-[328px] py-[20px] cursor-pointer bg-[#333] hover:bg-white rounded-3xl
       text-white hover:text-black hover:border-2 hover:border-[#F3F5FF]"
              >
                Continue
              </button>
            </form>
           
          </div>
        </div>
      )}

     
    </div>
  );
};

export default AdminLogin;

import React, { useState } from 'react';
import { IoMdHelpCircleOutline } from 'react-icons/io';
import { TbCameraSelfie } from 'react-icons/tb';

const PassportUpload = () => {
  const [selfie, setSelfie] = useState(null);

  const handleSelfieUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelfie(URL.createObjectURL(file));
    }
  };

  const triggerFileInput = () => {
    document.getElementById('selfie-upload').click();
  };

  const handleContinueClick = () => {
    if (selfie) {
      alert('Selfie uploaded successfully! Proceeding...');
    } else {
      alert('Please upload a selfie first.');
    }
  };

  const handleClearSelfie = () => {
    setSelfie(null);
  };

  return (
    <div>
      <div className="flex flex-col gap-[20px]">
        <div className="govt lg:justify-center lg:items-start">
          <p className="lg:text-[30px] text-[20px] font-bold">
            Government <span className="text-pink-500 font-bold">ID Card</span>
          </p>
          <div className="lg:flex lg:gap-[20px] flex">
            <div className="d1v bg-pink-500"></div>
            <div className="d1v bg-pink-500"></div>
            <div className="d1v bg-pink-500"></div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[20px] items-center justify-center p-[10px]">
            <div className="flex gap-[10px] items-center pb-[15px]">
              <p className="lg:text-[30px] text-[20px] font-bold">Your Selfie</p>
              <IoMdHelpCircleOutline className="text-1xl" />
            </div>
            <div>
              <div className="flex gap-[30px] items-center justify-center pb-[40px]">
                <div
                  className="flex justify-center items-center bg-neutral-300 lg:w-[200px] w-[150px] lg:h-[200px] h-[150px] rounded-full cursor-pointer"
                  onClick={triggerFileInput}
                >
                  {selfie ? (
                    <img
                      src={selfie}
                      alt="Uploaded Selfie"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <TbCameraSelfie className="w-[20vw] h-[5vh]" />
                  )}
                </div>
                <div className="flex flex-col p-[20px]">
                  <p className="lg:text-[25px] text-[15px] text-pink-500">Important!!!</p>
                  <div className="flex flex-col pt-[10px]">
                    <p className="lg:text-[13px] text-[12px]">Use Clear Background</p>
                    <p className="lg:text-[13px] text-[12px]">Clear Camera</p>
                    <p className="lg:text-[13px] text-[12px]">No Filter Or Lighting</p>
                    <p className="lg:text-[13px] text-[12px]">Bold and Clear Image</p>
                    <p className="lg:text-[13px] text-[12px]">Focus On Camera</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleSelfieUpload}
                  className="hidden"
                  id="selfie-upload"
                />
                <div
                  className="flex bg-pink-500 lg:w-[40vw] w-[80vw] h-[6vh] items-center justify-center p-[20px] rounded mt-4 cursor-pointer"
                  onClick={handleContinueClick}
                >
                  <span className="text-[20px] font-medium text-white">
                    Continue
                  </span>
                </div>
              </div>
              {selfie && (
                <div
                  className="flex justify-center items-center mt-4 cursor-pointer text-red-500 font-medium"
                  onClick={handleClearSelfie}
                >
                  <span>Clear Uploaded Selfie</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassportUpload;

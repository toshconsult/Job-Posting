import React, { useState } from 'react';
import { IoMdHelpCircleOutline } from "react-icons/io";
import { TbCloudUpload } from "react-icons/tb";

const Uploading = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [buttonText, setButtonText] = useState('Continue');
  const [uploadProgress, setUploadProgress] = useState(0);
  const [fileName, setFileName] = useState('');
  const [uploadComplete, setUploadComplete] = useState(false); 

  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    
    setFileName(file.name);

    setIsUploading(true);
    setButtonText('Uploading...');
    let progress = 0;

    
    const uploadInterval = setInterval(() => {
      if (progress < 100) {
        progress += 10;
        setUploadProgress(progress);
      } else {
        clearInterval(uploadInterval);
        setIsUploading(false);
        setButtonText('Upload Complete');
        setUploadComplete(true);
      }
    }, 100);
  };

  const handleContinue = () => {
    if (uploadComplete) {
      alert("Upload is complete. Proceeding to next step...");
    } else {
      alert("Please wait for the upload to complete.");
    }
  };

  return (
    <div>
      <div>
        <div>
          <div className='flex flex-col gap-[20px]'>
            <div className='govt lg:justify-center lg:items-start'>
              <p className='lg:text-[30px] text-[20px] font-bold'>
                Government <span className='text-pink-500 font-bold'>ID Card</span>
              </p>
              <div className='lg:flex lg:gap-[20px] flex'>
                <div className='d1v bg-pink-500'></div>
                <div className='d1v bg-pink-500'></div>
                <div className='d1v bg-black'></div>
              </div>
            </div>
            <div className='flex flex-col gap-[20px] items-center justify-center p-[10px]'>
                <div className='flex flex-col'>
                    <div className='flex gap-[10px] items-center pb-[15px]'>
                        <p className='lg:text-[30px] text-[20px] font-bold'>Upload Document</p>
                        <IoMdHelpCircleOutline className='text-1xl' />
                    </div>
                    <div className='flex justify-center items-center bg-neutral-300 lg:w-[40vw] w-[80vw] lg:h-[30vh] h-[20vh] rounded-lg'>
                        <div className='flex flex-col items-center justify-center'>
                            <TbCloudUpload className='text-black text-4xl mb-2'/>
                            <p className='text-black text-lg'>Upload</p>
                            <input
                            type="file"
                            onChange={handleFileUpload}
                            disabled={isUploading}
                            className="hidden"
                            id="file-upload"
                            />
                            <label htmlFor="file-upload" className="text-black cursor-pointer">
                            {isUploading ? 'Uploading...' : fileName ? fileName : 'Choose File'}</label>
                        </div>
                    </div>
                </div>
              {isUploading && (
                <div className="w-full bg-gray-300 rounded-full h-[4px] mt-4">
                  <div
                    className="bg-pink-500 h-[4px] rounded-full"
                    style={{ width: `${uploadProgress}%` }}></div>
                </div>
              )}
              <div className='flex justify-center items-center'>
                <div className='flex bg-pink-500 lg:w-[40vw] w-[80vw] h-[6vh] items-center justify-center p-[20px] rounded'>
                  <button
                    className='text-[20px] font-medium text-white cursor-pointer'
                    type='button'
                    onClick={handleContinue}
                    disabled={isUploading}
                  >
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploading;

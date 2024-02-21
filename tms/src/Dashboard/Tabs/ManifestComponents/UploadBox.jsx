import React, { useState } from 'react';
import { motion } from 'framer-motion';
import uploadImg from '../../../assets/upload.png';

const UploadBox = ({ closeUploadBox }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Optionally close the UploadBox after file selection
    closeUploadBox();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
    // Optionally close the UploadBox after file selection
    closeUploadBox();
  };

  const handleBackdropClick = () => {
    closeUploadBox();
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#d6d6d6] bg-opacity-50"
      onClick={handleBackdropClick}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div
        className="bg-[#ffff] px-20 py-6 rounded-3xl "
        onClick={(e) => e.stopPropagation()} 
      >
        <label htmlFor="fileInput" className='text-center flex flex-col justify-center items-center gap-3 cursor-pointer'>
          <img src={uploadImg} alt="" className="cursor-pointer" />
          <p className="poppins text-[#416072] mb-4">
            Drag and drop choose file to upload your files. <br />
            All csv, xlsx types are supported          
          </p>
        </label>
        <input
          type="file"
          id="fileInput"
          className="hidden"
          onChange={handleFileChange}
        />
        {selectedFile && (
          <p className="text-green-600">
            Selected file: {selectedFile.name}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default UploadBox;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import uploadImg from '../../../assets/upload.png';

const UploadBox = ({ closeUploadBox }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const isValidFileType = (file) => {
    const allowedTypes = ['text/csv', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
  
    return allowedTypes.includes(file.type);
  };
  

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && isValidFileType(file)) {
      setSelectedFile(file);
      setErrorMessage('');
      closeUploadBox();
    } else {
      setSelectedFile(null);
      setErrorMessage('Invalid file type. Please select a CSV or XLSX file.');
    }
  };
  

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    if (file && isValidFileType(file)) {
      setSelectedFile(file);
      setErrorMessage('');
      closeUploadBox();
    } else {
      setSelectedFile(null);
      setErrorMessage('Invalid file type. Please drop a CSV or XLSX file.');
    }
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
            Drag and drop or choose file to upload your files. <br />
            Only CSV and XLSX types are supported.          
          </p>
        </label>
        <input
          type="file"
          id="fileInput"
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          className="hidden"
          onChange={handleFileChange}
        />
        {errorMessage && (
          <p className="text-red-600">
            {errorMessage}
          </p>
        )}
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

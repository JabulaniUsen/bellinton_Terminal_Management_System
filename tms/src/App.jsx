import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Pages/CreateAccount';
import Signin from './Pages/Signin';
import PasswordResetInstructions from './Pages/AccountRecovery/PasswordResetInstructions';
import ForgottenPassword from './Pages/AccountRecovery/ForgottenPassword';
import ChangePassword from './Pages/AccountRecovery/ChangePassword';
import Dashboard from './Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path='/forgotten-password' element={<ForgottenPassword />} />
        <Route path='/reset-password-instructions' element={<PasswordResetInstructions />} />
        <Route path='/change-password' element={<ChangePassword />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;

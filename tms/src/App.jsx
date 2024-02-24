import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateAccount from './Pages/CreateAccount'; // Ensure correct path
import Signin from './Pages/Signin';
import PasswordResetInstructions from './Pages/AccountRecovery/PasswordResetInstructions';
import ForgottenPassword from './Pages/AccountRecovery/ForgottenPassword';
import ChangePassword from './Pages/AccountRecovery/ChangePassword';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path='/' element={<Signin/>} />
        <Route path='/forgotten-password' element={<ForgottenPassword/>} />
        <Route path='/reset-password-instructions' element={<PasswordResetInstructions/>} />
        <Route path='/change-password' element={<ChangePassword/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Header from '../../Components/Header';
import { Link } from 'react-router-dom';

function PasswordResetInstructions() {
  return (
    <div className="roboto">
      <Header/>
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Password Reset Instructions</h1>

        <p className="mb-4">
          We've sent you an email to reset your password. Follow the instructions below to regain access to your account:
        </p>

        <ol className="list-decimal ml-6 mb-4">
          <li>
            <strong>Check Your Email:</strong> Open your email inbox associated with the account you're resetting.
          </li>

          <li>
            <strong>Find the Email:</strong> Look for an email from [Your Company Name] with the subject "Password Reset Request."
          </li>

          <li>
            <strong>Open the Email:</strong> Click on the email to open it.
          </li>

          <li>
            <strong>Click the Reset Link:</strong> Inside the email, you'll find a link to reset your password. Click on it.
          </li>

          <li>
            <strong>Reset Your Password:</strong> You'll be directed to a page where you can create a new password. Choose a strong, secure password.
          </li>

          <li>
            <strong>Complete the Process:</strong> Follow the on-screen instructions to complete the password reset process.
          </li>
        </ol>

        <p className="mb-4">
          <strong>Note:</strong> The password reset link is valid for a limited time for security reasons.
          If you don't reset your password within this time frame, you may need to request another reset.
        </p>

        <Link to='' className='flex items-center justify-center'>
          <button type="submit" className='rounded-lg bg-[#20007F] px-[34px] py-[15px] text-white w-[200px]'>Resent Link</button>
        </Link>
      </div>
    </div>
  );
}

export default PasswordResetInstructions;

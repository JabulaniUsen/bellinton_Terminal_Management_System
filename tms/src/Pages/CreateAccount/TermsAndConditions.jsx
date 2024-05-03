import React from 'react';

function TermsAndConditions() {
  return (
    <div className=" p-4 roboto">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>

      <div className="flex gap-10">
        <div className="">
          <p className="mb-4">
            Welcome to Bellington Cargo Terminal, a platform owned by 
            Bellington Cargo Ltd. By accessing or using our services, 
            you agree to be bound by the following terms and conditions. 
            Please read them carefully.
          </p>

          <p className="mb-4">
            <strong>1. Acceptance of Terms</strong>
            <br />
              By registering and using Bellington Cargo Terminal services, 
              you agree to comply with these terms and conditions, as well 
              as any additional guidelines and rules posted on our platform. 
              If you do not agree with any part of these terms, please do not 
              use our services.
          </p>

          <p className="mb-4">
            <strong>2. User Registration</strong>
            <br />
            <span className="ml-4">
              2.1.  You must provide accurate and complete information during the registration process.
              <br />
              2.2. You are responsible for maintaining the confidentiality of your account credentials and ensuring their security.
            </span>
          </p>

          <p className="mb-4">
            <strong>3. User Conduct</strong>
            <br />
            <span className="ml-4">
            3.1. You agree not to engage in any activities that may harm, disrupt, or interfere with Bellington Cargo Terminal services.
            </span>
          </p>

          <p className="mb-4">
            <strong>4. Privacy and Data Security</strong>
            <br />
            <span className="ml-4">
              4.1. Bellington Cargo Terminal is committed to protecting your privacy. Please review our Privacy Policy to understand how we collect, use, and safeguard your personal information.
              <br />
              4.2. Shenor Technologies, as the software developer, adheres to industry standards to ensure the security of your data. However, Bellington Cargo Terminal and Shenor Technologies are not liable for any unauthorized access, disclosure, or loss of data resulting from factors beyond our control.
            </span>
          </p>
        </div>

        <div className="">
          <p className="mb-4">
            <strong>5. Modification of Terms</strong>
            <br />
            <span className="ml-4">
              5.1. Bellington Cargo Terminal reserves the right to modify or update these terms and conditions at any time. Users will be notified of significant changes.
              <br />
              5.2. Shenor Technologies may release updates to the software. Users are encouraged to keep their software up-to-date to access the latest features and security enhancements
            </span>
          </p>

          <p className="mb-4">
            <strong>6. Termination of Services</strong>
            <br />
            <span className="ml-4">
              6.1. Bellington Cargo Terminal reserves the right to terminate or suspend your account if you violate these terms or engage in activities that may harm the platform.
              <br />
              6.2. Shenor Technologies reserves the right to cease software support or services for outdated versions.
            </span>
          </p>

          <p className="mb-4">
            <strong>7. Governing Law</strong>
          </p>

          <p>These terms and conditions are governed by the laws of Nigeria, and any disputes arising shall be subject to the exclusive jurisdiction of the courts in Nigeria. By using Belington Cargo Terminal, you acknowledge and agree to these terms and conditions. If you have any questions or concerns, please contact our support team.</p>
          <div className="text-center m-8">
            <strong className='text-lg '>Bellington Cargo Export Processing Terminal - 2024</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;

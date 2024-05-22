import React, { useEffect, useState } from 'react';

function Security({ onUpdate, next }) {
  const [formValues, setFormValues] = useState({
    account_recovery_question: '',
    account_recovery_answer: '',
    account_recovery_email: '',
    account_recovery_phone: '',
  });

  const [errors, setErrors] = useState({});

  // Clear data from local storage when leaving the page or when it disappears
  useEffect(() => {
    const cleanup = () => {
      localStorage.removeItem('securityFormData');
    };

    window.addEventListener('beforeunload', cleanup);

    return () => {
      window.removeEventListener('beforeunload', cleanup);
    };
  }, []);

  const clearLocalStorage = () => {
    localStorage.removeItem('securityFormData');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  

  const validate = () => {
    const newErrors = {};
    if (!formValues.account_recovery_question) {
      newErrors.account_recovery_question = 'Please choose a security question';
    }
    if (!formValues.account_recovery_answer) {
      newErrors.account_recovery_answer = 'Please provide an answer to the security question';
    }
    if (!formValues.account_recovery_email) {
      newErrors.account_recovery_email = 'Please provide a recovery email';
    } else if (!/\S+@\S+\.\S+/.test(formValues.account_recovery_email)) {
      newErrors.account_recovery_email = 'Please provide a valid email address';
    }
    if (!formValues.account_recovery_phone) {
      newErrors.account_recovery_phone = 'Please provide a recovery phone number';
    } else if (!/^\d+$/.test(formValues.account_recovery_phone)) {
      newErrors.account_recovery_phone = 'Phone number should contain only digits';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onUpdate(formValues);
      clearLocalStorage();
      next();
    }
  };

  return (
    <div>
      <form className='flex flex-col gap-10' onUpdate={handleSubmit}>
        {/* Security Questions */}
        <div className="flex items-center justify-between">
          <p className='text-[18px] font-semibold'>Security Questions:</p>
          <div>
            <select
              name="account_recovery_question"
              className='py-3 px-2 rounded border-[1px] border-black w-[346px] outline-none'
              value={formValues.account_recovery_question}
              onChange={handleChange}
            >
              <option value="">Choose security question</option>
              <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
              <option value="In which city were you born?">In which city were you born?</option>
              <option value="What is the name of your first pet?">What is the name of your first pet?</option>
              <option value="What is the last name of your favorite teacher?">What is the last name of your favorite teacher?</option>
              <option value="What is your favorite childhood book?">What is your favorite childhood book?</option>
            </select>
            {errors.account_recovery_question && <div className="text-red-500">{errors.account_recovery_question}</div>}
          </div>
          <div>
            <input
              type="text"
              name="account_recovery_answer"
              className='py-3 px-2 rounded border-[1px] border-black w-[347px] outline-none'
              placeholder='Enter account recovery answer to the question'
              value={formValues.account_recovery_answer}
              onChange={handleChange}
            />
            {errors.account_recovery_answer && <div className="text-red-500">{errors.account_recovery_answer}</div>}
          </div>
        </div>

        {/* Account Recovery Email */}
        <div className="grid grid-cols-3 items-center justify-between">
          <p className='text-[18px] font-semibold'>Account Recovery Email:</p>
          <div>
            <input
              type="email"
              name="account_recovery_email"
              className='py-3 px-2 rounded border-[1px] border-black w-[347px] outline-none'
              placeholder='Enter recovery email'
              value={formValues.account_recovery_email}
              onChange={handleChange}
            />
            {errors.account_recovery_email && <div className="text-red-500">{errors.account_recovery_email}</div>}
          </div>
        </div>

        {/* Account Recovery Phone Number */}
        <div className="grid grid-cols-3 items-center justify-between gap-1">
          <p className='text-[18px] font-semibold'>Account Recovery Phone Number:</p>
          <div>
            <input
              type='text'
              name="account_recovery_phone"
              className='py-3 px-2 rounded border-[1px] border-black w-[347px] outline-none'
              placeholder='Enter recovery phone number'
              value={formValues.account_recovery_phone}
              onChange={handleChange}
            />
            {errors.account_recovery_phone && <div className="text-red-500">{errors.account_recovery_phone}</div>}
          </div>
        </div>

        {/* Next Button */}
        <div className="flex">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-[#4e9352] hover:bg-[#305a32] text-white font-bold py-2 px-4 rounded mt-4"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}

export default Security;

import React, { useState } from 'react';

import { STEPS } from './helpers';
import EmailPasswordForm from './EmailPasswordForm';
import ProfileForm from './ProfileForm';

const renderForm = (step, setStep) => {
  switch (step) {
    case STEPS.EMAIL_PASSWORD:
      return <EmailPasswordForm setStep={setStep} />;
    case STEPS.PROFILE:
      return <ProfileForm setStep={setStep} />;
  }
};

const SignUp = () => {
  const [step, setStep] = useState(STEPS.EMAIL_PASSWORD);

  return (
    <div className="signup">
      <h1 className="text-center">계정 만들기</h1>
      {renderForm(step, setStep)}
      <style jsx global>{`
        .signup form {
          max-width: 320px;
          padding: 8px;
          margin: 0 auto;
        }

        .signup input.form-control {
          font-size: 16px;
          height: auto;
          padding: 10px;
          margin-bottom: 1rem;
        }

        .signup button.btn {
          background-color: #3b5999;
          color: #fffffe;
          font-weight: 800;
          border-color: unset;
          margin-top: 10px;
        }

        .signup button.btn-secondary {
          background-color: #566888;
        }

        .signup .text-help {
          margin-top: 10px;
        }

        .signup .login-here {
          font-weight: 900;
          color: #3a5999;
        }

        .signup .error {
          margin: -10px 0 10px;
          color: #d00;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
};

export default SignUp;

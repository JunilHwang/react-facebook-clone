import React, { useCallback, useState } from 'react';

import { STEPS } from './helpers';
import EmailPasswordForm from './EmailPasswordForm';
import ProfileForm from './ProfileForm';

const renderForm = ({ step, setStep, formData, extendFormData }) => {
  const props = { setStep, extendFormData };
  const { name, file, principal, credentials, repeatCredentials } = formData;
  switch (step) {
    case STEPS.EMAIL_PASSWORD:
      return <EmailPasswordForm {...props} initialValues={{ principal, credentials, repeatCredentials }} />;
    case STEPS.PROFILE:
      return <ProfileForm {...props} initialValues={{ name, file }} />;
  }
};

const SignUp = () => {
  const [step, setStep] = useState(STEPS.EMAIL_PASSWORD);
  const [formData, setFormData] = useState({
    principal: '',
    credentials: '',
    repeatCredentials: '',
    name: '',
    file: '',
  });
  const extendFormData = useCallback(
    (newFormData) => {
      setFormData({
        ...formData,
        ...newFormData,
      });
    },
    [formData]
  );

  return (
    <div className="signup">
      <h1 className="text-center">계정 만들기</h1>
      {renderForm({ step, setStep, formData, extendFormData })}
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

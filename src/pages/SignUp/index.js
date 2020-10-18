import React, { useCallback, useState } from 'react';

import { STEPS } from './helpers';
import EmailPasswordForm from './EmailPasswordForm';
import ProfileForm from './ProfileForm';
import { useAuth } from '@/hooks';
import { useHistory } from 'react-router';

const initUserInfo = {
  principal: '',
  credentials: '',
  repeatCredentials: '',
  name: '',
  file: '',
};

const renderForm = ({ step, setStep, userInfo, extendUserInfo, handleSignUp }) => {
  const props = { setStep, extendUserInfo };
  const { name, file, principal, credentials, repeatCredentials } = userInfo;
  switch (step) {
    case STEPS.EMAIL_PASSWORD:
      return <EmailPasswordForm {...props} initialValues={{ principal, credentials, repeatCredentials }} />;
    case STEPS.PROFILE:
      return <ProfileForm {...props} initialValues={{ name, file }} handleSignUp={handleSignUp} />;
  }
};

const SignUp = () => {
  const { signUp } = useAuth();
  const history = useHistory();
  const [step, setStep] = useState(STEPS.EMAIL_PASSWORD);
  const [userInfo, setUserInfo] = useState(initUserInfo);

  const extendUserInfo = useCallback(
    (newUserInfo) => {
      setUserInfo({
        ...userInfo,
        ...newUserInfo,
      });
    },
    [userInfo]
  );

  const handleSignUp = useCallback(() => {
    const { principal, credentials, name } = userInfo;
    const formData = new FormData();
    formData.append('principal', principal);
    formData.append('credentials', credentials);
    formData.append('name', name);
    signUp(formData)
      .then(() => {
        alert('회원가입이 완료되었습니다.');
        setUserInfo(initUserInfo);
        history.push('/login');
      })
      .catch((e) => alert(e.message));
  }, [userInfo]);

  return (
    <div className="signup">
      <h1 className="text-center">계정 만들기</h1>
      {renderForm({ step, setStep, userInfo, extendUserInfo, handleSignUp })}
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

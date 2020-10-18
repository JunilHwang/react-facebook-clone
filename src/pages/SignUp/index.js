import React, { useCallback, useState } from 'react';

import { STEPS } from './helpers';
import EmailPasswordForm from './EmailPasswordForm';
import ProfileForm from './ProfileForm';
import { useAuth } from '@/hooks';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { AuthMessage } from '@/constants';

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
        alert(AuthMessage.SIGN_UP);
        setUserInfo(initUserInfo);
        history.push('/login');
      })
      .catch((e) => alert(e.message));
  }, [userInfo]);

  return (
    <div className="signup">
      <h1 className="text-center">계정 만들기</h1>
      {renderForm({ step, setStep, userInfo, extendUserInfo, handleSignUp })}
      <p className="text-help text-center">
        이미 계정이 있으신가요?{' '}
        <Link className="text-center login-here" to="/login">
          로그인 하기
        </Link>
      </p>
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
        }

        .signup input.form-control:not(:first-child) {
          margin-top: 10px;
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
      `}</style>
    </div>
  );
};

export default SignUp;

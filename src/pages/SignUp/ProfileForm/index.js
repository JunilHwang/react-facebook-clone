import React from 'react';
import { Link } from 'react-router-dom';
import { STEPS } from '@/pages/SignUp/helpers';

const ProfileForm = ({ setStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted!');
  };

  const handleClickGoBack = () => setStep(STEPS.EMAIL_PASSWORD);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control" placeholder="이름" required />
        <input type="file" className="form-control" placeholder="Profile" />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          가입하기
        </button>
        <button className="btn btn-lg btn-secondary btn-block" type="button" onClick={handleClickGoBack}>
          이전 단계
        </button>
      </form>
      <p className="text-help text-center">
        이미 계정이 있으신가요?{' '}
        <Link className="text-center login-here" to="/login">
          로그인 하기
        </Link>
      </p>
    </>
  );
};

export default ProfileForm;

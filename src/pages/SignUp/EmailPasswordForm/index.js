import React from 'react';
import { STEPS } from '@/pages/SignUp/helpers';

const EmailPasswordForm = ({ setStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(STEPS.PROFILE);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" className="form-control" placeholder="이메일" required />
      <input type="password" className="form-control" placeholder="비밀번호" minLength="5" required />
      <input type="password" className="form-control" placeholder="비밀번호 확인" required />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        다음
      </button>
    </form>
  );
};

export default EmailPasswordForm;

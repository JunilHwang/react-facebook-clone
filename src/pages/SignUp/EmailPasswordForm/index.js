import React from 'react';
import { STEPS } from '@/pages/SignUp/helpers';
import { Field, useFormikContext } from 'formik';
import {
  composeValidators,
  createConfirmedPasswordValidator,
  required,
  validUniqueEmail,
} from '@/services/FormHelper/validators';
import EmailInput from '@/components/Form/EmailInput';
import PasswordInput from '@/components/Form/PasswordInput';

const EmailPasswordForm = ({ setStep }) => {
  const { values, validateField, validateForm } = useFormikContext();
  const validConfirmPassword = createConfirmedPasswordValidator(values.password);
  const handleClickNextStep = (e) => {
    e.preventDefault();
    validateField('email');
    validateField('password');
    validateField('confirmPassword');
    validateForm().then((v) => {
      if (Object.keys(v).length === 0) {
        setStep(STEPS.PROFILE);
      }
    });
  };

  return (
    <>
      <Field
        validate={validUniqueEmail}
        component={EmailInput}
        className="form-control"
        name="email"
        placeholder="이메일"
      />
      <Field
        validate={required}
        component={PasswordInput}
        className="form-control"
        name="password"
        type="password"
        placeholder="비밀번호"
        minLength="5"
      />
      <Field
        validate={composeValidators(required, validConfirmPassword)}
        component={PasswordInput}
        type="password"
        className="form-control"
        name="confirmPassword"
        placeholder="비밀번호 확인"
      />
      <button className="btn btn-lg btn-primary btn-block" onClick={handleClickNextStep}>
        다음
      </button>
    </>
  );
};

export default EmailPasswordForm;

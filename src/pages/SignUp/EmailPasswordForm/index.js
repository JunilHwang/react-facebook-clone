import React from 'react';
import { Field, useFormikContext } from 'formik';
import { STEPS } from '@/pages/SignUp/helpers';
import PasswordInput from '@/components/Form/PasswordInput';
import EmailInput from '@/components/Form/EmailInput';
import {
  composeValidators,
  createConfirmedPasswordValidator,
  required,
  validUniqueEmail,
} from '@/services/FormHelper/validators';

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
    // setStep(STEPS.PROFILE)
  };

  return (
    <>
      <Field
        className="form-control"
        component={EmailInput}
        name="email"
        placeholder="이메일"
        validate={validUniqueEmail}
      />
      <Field
        validate={required}
        name="password"
        component={PasswordInput}
        type="password"
        className="form-control"
        placeholder="비밀번호"
        minLength="5"
      />
      <Field
        validate={composeValidators(required, validConfirmPassword)}
        name="confirmPassword"
        component={PasswordInput}
        className="form-control"
        placeholder="비밀번호 확인"
      />
      <button className="btn btn-lg btn-primary btn-block" onClick={handleClickNextStep}>
        다음
      </button>
    </>
  );
};

export default EmailPasswordForm;

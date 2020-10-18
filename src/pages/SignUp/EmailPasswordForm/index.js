import React, { useCallback } from 'react';
import { STEPS } from '@/pages/SignUp/helpers';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const keys = ['email', 'credentials', 'repeatCredentials'];

const initValues = keys.reduce((obj, k) => ({ ...obj, [k]: '' }), {});

const blanks = {
  email: '이메일을 입력해주세요',
  credentials: '비밀번호를 입력해주세요',
  repeatCredentials: '비밀번호 확인란을 입력해주세요',
};

const EmailPasswordForm = ({ setStep }) => {
  const handleSubmit = useCallback((values, { resetForm }) => {
    console.log(values);
    console.log(STEPS.PROFILE);
    // setStep(STEPS.PROFILE);
    resetForm();
  }, []);

  const handleValidate = useCallback(
    (values) => {
      const errors = Object.entries(blanks).reduce((obj, [k, v]) => {
        if (values[k].trim().length === 0) {
          obj[k] = v;
        }
        return obj;
      }, {});

      const { credentials, repeatCredentials } = values;

      if (credentials !== repeatCredentials) {
        errors.repeatCredentials = '비밀번호 확인란의 값이 비밀번호와 일치하지 않습니다.';
      }

      return errors;
    },
    [blanks]
  );

  const ErrorWrapper = useCallback((msg) => <div className="error">{msg}</div>, []);

  return (
    <Formik initialValues={initValues} onSubmit={handleSubmit} validate={handleValidate}>
      <Form>
        <Field type="email" name="email" className="form-control" placeholder="이메일" />
        <ErrorMessage name="email" render={ErrorWrapper} />
        <Field type="password" name="credentials" className="form-control" placeholder="비밀번호" minLength="5" />
        <ErrorMessage name="credentials" render={ErrorWrapper} />
        <Field type="password" name="repeatCredentials" className="form-control" placeholder="비밀번호 확인" />
        <ErrorMessage name="repeatCredentials" render={ErrorWrapper} />
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          다음
        </button>
      </Form>
    </Formik>
  );
};

export default EmailPasswordForm;

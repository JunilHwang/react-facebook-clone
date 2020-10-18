import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { STEPS } from '@/pages/SignUp/helpers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAuth } from '@/hooks';
import SignUpErrorMessage from '../SignUpErrorMessage';

const ProfileForm = ({ setStep, extendUserInfo, initialValues, handleSignUp }) => {
  const { ErrorWrapper } = useAuth();

  const handleSubmit = useCallback(
    (values) => {
      extendUserInfo({ ...values });
      handleSignUp();
    },
    [extendUserInfo, handleSignUp]
  );

  const handleClickGoBack = useCallback(() => {
    setStep(STEPS.EMAIL_PASSWORD);
  }, []);

  const handleValidate = useCallback(
    ({ name }) => {
      if (name.trim().length === 0) {
        return { name: SignUpErrorMessage.NAME_BLANK };
      }
      extendUserInfo({ name });
      return {};
    },
    [extendUserInfo]
  );

  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues} validate={handleValidate}>
        <Form>
          <Field type="text" name="name" className="form-control" placeholder="이름" required />
          <ErrorMessage name="name" render={ErrorWrapper} />
          <Field type="file" name="file" className="form-control" placeholder="Profile" />
          <ErrorMessage name="file" render={ErrorWrapper} />
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            가입하기
          </button>
          <button className="btn btn-lg btn-secondary btn-block" type="button" onClick={handleClickGoBack}>
            이전 단계
          </button>
        </Form>
      </Formik>
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

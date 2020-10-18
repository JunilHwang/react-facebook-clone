import React, { useCallback } from 'react';
import { STEPS } from '@/pages/SignUp/helpers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAuth } from '@/hooks';
import { FormErrorMessage } from '@/constants';

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
        return { name: FormErrorMessage.NAME_BLANK };
      }
      extendUserInfo({ name });
      return {};
    },
    [extendUserInfo]
  );

  return (
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
  );
};

export default ProfileForm;

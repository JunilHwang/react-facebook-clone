import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import { ErrorMessage, Field, Form, Formik } from 'formik';

import { history } from '@/data/configureStore';
import { formStyle, buttonStyle, textHelpStyle, linkStyle } from '@/layouts/PublicLayout';
import { useAuth } from '@/hooks';
import { FormErrorMessage } from '@/constants';
import { AuthMessage } from '@/constants';

const initialValues = { email: '', password: '' };

export const inputStyle = css.resolve`
  font-size: 16px;
  height: auto;
  padding: 10px;
`;

const SignIn = () => {
  const { signIn, ErrorWrapper } = useAuth();
  const handleSubmit = useCallback(
    ({ email, password }) => {
      signIn({ email, password })
        .then(() => {
          alert(AuthMessage.SIGN_IN);
          history.push('/');
        })
        .catch((e) => {
          alert(e.message);
        });
    },
    [signIn, history]
  );

  const handleValidate = useCallback(({ email, password }) => {
    const errors = {};
    if (email.trim().length === 0) {
      errors.email = FormErrorMessage.EMAIL_BLANK;
    }
    if (password.trim().length === 0) {
      errors.password = FormErrorMessage.PASSWORD_BLANK;
    }
    return errors;
  }, []);

  return (
    <>
      <h1 className="text-center">로그인</h1>
      <Formik onSubmit={handleSubmit} initialValues={initialValues} validate={handleValidate}>
        <Form className={formStyle.className}>
          <Field name="email" type="email" className={`form-control ${inputStyle.className}`} placeholder="Email" />
          <ErrorMessage name="email" render={ErrorWrapper} />
          <Field
            name="password"
            type="password"
            className={`form-control ${inputStyle.className}`}
            placeholder="Password"
          />
          <ErrorMessage name="password" render={ErrorWrapper} />
          <button className={`btn btn-lg btn-primary btn-block ${buttonStyle.className}`} type="submit">
            로그인
          </button>
        </Form>
      </Formik>
      <p className={`text-center ${textHelpStyle.className}`}>
        계정이 필요하신가요?
        <Link className={`text-center ${linkStyle.className}`} to="/signup">
          계정 만들기
        </Link>
      </p>
      {inputStyle.styles}
      {formStyle.styles}
      {buttonStyle.styles}
      {textHelpStyle.styles}
      {linkStyle.styles}
    </>
  );
};

export default SignIn;

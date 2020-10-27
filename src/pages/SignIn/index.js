import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import css from 'styled-jsx/css';
import { Field, Form, Formik } from 'formik';

import { formStyle, buttonStyle, textHelpStyle, linkStyle } from '@/layouts/PublicLayout';
import { composeValidators, required, validEmail } from '@/services/FormHelper/validators';
import EmailInput from '@/components/Form/EmailInput';
import PasswordInput from '@/components/Form/PasswordInput';
import * as actions from '@/data/rootActions';

const initialValues = { email: '', password: '' };

export const inputStyle = css.resolve`
  font-size: 16px;
  height: auto;
  padding: 10px;
`;

const SignIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values) => dispatch(actions.user.login(values));

  return (
    <>
      <h1 className="text-center">로그인</h1>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={formStyle.className}>
          <Field
            component={EmailInput}
            validate={composeValidators(required, validEmail)}
            name="email"
            className={`form-control ${inputStyle.className}`}
            placeholder="Email"
          />
          <Field
            component={PasswordInput}
            validate={required}
            name="password"
            className={`form-control ${inputStyle.className}`}
            placeholder="Password"
          />
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

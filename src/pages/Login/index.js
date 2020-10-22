import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Formik, Field } from 'formik';
import * as actions from '@/data/rootActions';
import EmailInput from '@/components/Form/EmailInput';
import PasswordInput from '@/components/Form/PasswordInput';
import { composeValidators, required, validEmail } from '@/services/FormHelper/validators';

const INITIAL_VALUES = {
  email: '',
  password: '',
};

function Login() {
  const dispatch = useDispatch();
  const handleSubmit = (values) => dispatch(actions.user.login(values));

  return (
    <div className="login container">
      <h1 className="text-center">로그인</h1>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form>
          <Field
            validate={composeValidators(required, validEmail)}
            name="email"
            component={EmailInput}
            className="form-control"
            placeholder="Email"
          />
          <Field
            name="password"
            validate={required}
            component={PasswordInput}
            className="form-control"
            placeholder="Password"
          />
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            로그인
          </button>
        </Form>
      </Formik>
      <p className="text-help text-center">
        계정이 필요하신가요?{' '}
        <Link className="text-center new-account" to="/signup">
          계정 만들기
        </Link>
      </p>
      <style jsx global>{`
        .login form {
          max-width: 320px;
          padding: 8px;
          margin: 0 auto;
        }
        .login input.form-control {
          font-size: 16px;
          height: auto;
          padding: 10px;
        }
        .login button.btn {
          background-color: #3b5999;
          color: #fffffe;
          font-weight: 800;
          border-color: unset;
          margin-top: 10px;
        }
        .login .text-help {
          margin-top: 10px;
        }
        .login .new-account {
          font-weight: 900;
          color: #3a5999;
        }
      `}</style>
    </div>
  );
}

export default Login;

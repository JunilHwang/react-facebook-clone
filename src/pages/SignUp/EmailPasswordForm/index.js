import React, { useCallback } from 'react';
import { STEPS } from '@/pages/SignUp/helpers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { userService } from '@/services';
import { EMAIL_BLANK, PASSWORD_BLANK, REPEAT_PASSWORD_BLANK, NONE_MATCH_PASSWORD, EMAIL_EXISTS } from './errorMesages';

const blanks = {
  principal: EMAIL_BLANK,
  credentials: PASSWORD_BLANK,
  repeatCredentials: REPEAT_PASSWORD_BLANK,
};

const EmailPasswordForm = ({ setStep, extendFormData, initialValues }) => {
  const handleSubmit = useCallback(async (values, { setErrors }) => {
    const { principal } = values;
    const isExists = await userService.validateExists(principal);
    if (isExists) {
      return setErrors({ principal: EMAIL_EXISTS });
    }
    extendFormData({ ...values });
    setStep(STEPS.PROFILE);
  }, []);

  const handleValidate = useCallback(
    (values) => {
      const { credentials, repeatCredentials } = values;
      const errors = Object.entries(blanks).reduce((obj, [k, v]) => {
        if (values[k].trim().length === 0) {
          obj[k] = v;
        }
        return obj;
      }, {});

      if (credentials !== repeatCredentials) {
        errors.repeatCredentials = NONE_MATCH_PASSWORD;
      }

      return errors;
    },
    [blanks]
  );

  const ErrorWrapper = useCallback((msg) => <div className="error">{msg}</div>, []);

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validate={handleValidate}>
      <Form>
        <Field type="principal" name="principal" className="form-control" placeholder="이메일" />
        <ErrorMessage name="principal" render={ErrorWrapper} />
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

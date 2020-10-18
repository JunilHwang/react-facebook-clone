import React, { useCallback } from 'react';
import { STEPS } from '@/pages/SignUp/helpers';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { userService } from '@/services';
import { FormErrorMessage } from '@/constants';
import { useAuth } from '@/hooks';

const blanks = {
  principal: FormErrorMessage.EMAIL_BLANK,
  credentials: FormErrorMessage.PASSWORD_BLANK,
  repeatCredentials: FormErrorMessage.REPEAT_PASSWORD_BLANK,
};

const EmailPasswordForm = ({ setStep, extendUserInfo, initialValues }) => {
  const { ErrorWrapper } = useAuth();

  const handleSubmit = useCallback(
    async (values, { setErrors }) => {
      const { principal } = values;
      const isExists = await userService.validateExists(principal);
      if (isExists) {
        return setErrors({ principal: FormErrorMessage.EMAIL_EXISTS });
      }
      extendUserInfo({ ...values });
      setStep(STEPS.PROFILE);
    },
    [extendUserInfo]
  );

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
        errors.repeatCredentials = FormErrorMessage.NONE_MATCH_PASSWORD;
      }

      return errors;
    },
    [blanks]
  );

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

import React from 'react';
import { STEPS } from '@/pages/SignUp/helpers';
import { Field, useFormikContext } from 'formik';
import TextInput from '@/components/Form/TextInput';

const ProfileForm = ({ setStep }) => {
  const { setFieldValue } = useFormikContext();
  const handleClickGoBack = () => setStep(STEPS.EMAIL_PASSWORD);
  const handleOnFileChange = (event) => {
    const files = event.target?.files;
    if (files?.length) {
      setFieldValue('profileImage', files[0]);
    }
  };

  return (
    <>
      <Field name="name" component={TextInput} className="form-control" placeholder="이름" required />
      <input
        name="profileImage"
        type="file"
        className="form-control"
        onChange={handleOnFileChange}
        placeholder="Profile"
      />
      <button className="btn btn-lg btn-primary btn-block" type="submit">
        가입하기
      </button>
      <button className="btn btn-lg btn-secondary btn-block" type="button" onClick={handleClickGoBack}>
        이전 단계
      </button>
      <p className="text-help text-center">
        이미 계정이 있으신가요?{' '}
        <button className="text-center login-here" type="submit">
          로그인 하기
        </button>
      </p>
    </>
  );
};

export default ProfileForm;

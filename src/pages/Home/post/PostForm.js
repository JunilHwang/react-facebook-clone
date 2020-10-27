import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import css from 'styled-jsx/css';

import TextAreaInput from '@/components/Form/TextAreaInput';
import { composeValidators, required, validPost } from '@/services/FormHelper/validators';
import * as actions from '@/data/rootActions';

const INITIAL_VALUES = { contents: '' };

const PostForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ contents }, { resetForm }) => dispatch(actions.posts.addPost({ contents, resetForm }));

  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        {({ errors }) => (
          <Form className="write-form">
            <Field
              component={TextAreaInput}
              validate={composeValidators(required, validPost)}
              name="contents"
              className={`input-lg form-control ${textareaStyle.className}`}
              placeholder="무슨 생각을 하고 계신가요?"
              spellCheck="false"
            />
            <button type="submit" className="btn btn-primary" disabled={Object.values(errors).length > 0}>
              공유하기
            </button>
          </Form>
        )}
      </Formik>
      <style jsx>{WriteFormStyle}</style>
      {textareaStyle.styles}
    </>
  );
};

const WriteFormStyle = css`
  form {
    margin-bottom: 100px;
  }

  button.btn {
    float: right;
    margin-bottom: 0;
    margin-top: 16px;
    background-color: #3b5999;
    color: #fffffe;
    border: none;
    font-weight: 800;
  }
`;

const textareaStyle = css.resolve`
  textarea {
    min-height: 100px;
    line-height: 20px;
    padding: 20px;
    font-size: 18px;
    resize: none;
    border: none;
    border-radius: 0.5rem;
    transition: box-shadow ease-in-out 1s;
  }

  textarea:focus {
    box-shadow: #999999 0 0 50px;
  }
`;

export default React.memo(PostForm);

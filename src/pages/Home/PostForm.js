import React from 'react';
import { useDispatch } from 'react-redux';
import { Field, Form, Formik } from 'formik';
import * as actions from '@/data/rootActions';
import TextAreaInput from '@/components/Form/TextAreaInput';
import { composeValidators, required, validPost } from '@/services/FormHelper/validators';

const INITIAL_VALUES = { contents: '' };

const PostForm = (props) => {
  const { minHeight = 100, lineHeight = 20, placeholder = '무슨 생각을 하고 계신가요?' } = props;
  const dispatch = useDispatch();

  const handleSubmit = ({ contents }, { resetForm }) => dispatch(actions.posts.addPost({ contents, resetForm }));

  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        {({ errors }) => (
          <Form className="write-form">
            <Field
              lineHeight={lineHeight}
              validate={composeValidators(required, validPost)}
              component={TextAreaInput}
              name="contents"
              className="form-control input-lg"
              placeholder={placeholder}
              spellCheck="false"
            />
            <button type="submit" className="btn btn-primary" disabled={Object.values(errors).length > 0}>
              공유하기
            </button>
          </Form>
        )}
      </Formik>
      <style jsx global>{`
        .write-form textarea.form-control {
          min-height: ${minHeight}px;
          line-height: ${lineHeight}px;
          padding: 20px;
          font-size: 18px;
          resize: none;
          border: none;
          border-radius: 0.5rem;
          transition: box-shadow ease-in-out 1s;
        }
        .write-form > textarea:focus {
          box-shadow: #999999 0 0 50px;
        }
        .write-form > button.btn {
          float: right;
          margin-bottom: 0;
          margin-top: 16px;
          background-color: #3b5999;
          color: #fffffe;
          border: none;
          font-weight: 800;
        }
        .write-form {
          margin-bottom: 100px;
        }
      `}</style>
    </>
  );
};

export default PostForm;

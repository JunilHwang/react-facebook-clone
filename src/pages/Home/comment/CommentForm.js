import React from 'react';
import css from 'styled-jsx/css';
import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import TextAreaInput from '@/components/Form/TextAreaInput';
import { composeValidators, required, validComment } from '@/services/FormHelper/validators';
import * as selectors from '@/data/rootSelectors';
import * as actions from '@/data/rootActions';

const INITIAL_VALUES = { contents: '' };

const CommentForm = ({ postSeq }) => {
  const dispatch = useDispatch();
  const post = useSelector(selectors.posts.getPost(postSeq));

  const handleSubmit = ({ contents }, { resetForm }) => {
    dispatch(
      actions.comments.createComment({
        postId: postSeq,
        postWriterId: post.userId.value,
        contents,
        resetForm,
      })
    );
  };

  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        {({ errors }) => (
          <Form className={formStyle.className}>
            <Field
              component={TextAreaInput}
              validate={composeValidators(required, validComment)}
              name="contents"
              className={`form-control input-lg ${textareaStyle.className}`}
              placeholder="댓글을 입력해주세요"
              spellCheck="false"
            />
            <button
              type="submit"
              className={`btn btn-primary ${buttonStyle.className}`}
              disabled={Object.values(errors).length > 0}>
              댓글달기
            </button>
          </Form>
        )}
      </Formik>
      {formStyle.styles}
      {buttonStyle.styles}
      {textareaStyle.styles}
    </>
  );
};

const formStyle = css.resolve`
  margin: 20px;
`;

const buttonStyle = css.resolve`
  float: right;
  margin-bottom: 0;
  margin-top: 16px;
  background-color: #3b5999;
  color: #fffffe;
  border-color: unset;
  font-weight: 800;
`;

const textareaStyle = css.resolve`
  textarea {
    min-height: 20px;
    line-height: 20px;
    border-radius: 0.5rem;
    resize: none;
  }
`;

export default CommentForm;

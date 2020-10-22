import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '@/data/rootActions';
import { Field, Form, Formik } from 'formik';
import TextAreaInput from '@/components/Form/TextAreaInput';
import * as selectors from '@/data/rootSelectors';
import { composeValidators, required, validComment } from '@/services/FormHelper/validators';

const INITIAL_VALUES = { contents: '' };

const CommentForm = (props) => {
  const dispatch = useDispatch();
  const { postSeq, minHeight = 20, lineHeight = 20, placeholder = '댓글을 입력하세요...' } = props;
  const post = useSelector(selectors.posts.getPost(postSeq));

  const handleSubmit = ({ contents }, { resetForm }) => {
    dispatch(actions.comments.createComment({ postId: postSeq, postWriterId: post.userId.value, contents, resetForm }));
  };

  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        {({ errors }) => (
          <Form className="comment-form">
            <Field
              lineHeight={lineHeight}
              validate={composeValidators(required, validComment)}
              component={TextAreaInput}
              name="contents"
              className="form-control input-lg"
              placeholder={placeholder}
              spellCheck="false"
            />
            <button type="submit" className="btn btn-primary" disabled={Object.values(errors).length > 0}>
              댓글달기
            </button>
          </Form>
        )}
      </Formik>
      <style jsx global>{`
        .comment-form {
          margin: 20px;
        }
        .comment-form > textarea.form-control {
          min-height: ${minHeight}px;
          line-height: ${lineHeight}px;
          border-radius: 0.5rem;
          resize: none;
        }
        .comment-form > button.btn {
          float: right;
          margin-bottom: 0;
          margin-top: 16px;
          background-color: #3b5999;
          color: #fffffe;
          border-color: unset;
          font-weight: 800;
        }
      `}</style>
    </>
  );
};

export default CommentForm;

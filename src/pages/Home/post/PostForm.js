import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import css from 'styled-jsx/css';
import { useAuth, useForm } from '../../../hooks';

const PostForm = ({ onAddPost }) => {
  const contentsRef = useRef();
  const { handleFormSubmit } = useForm();
  const [formHeight, setFormHeight] = useState(100);

  const handlePostSubmit = useCallback(
    (event) => {
      const callback = () => {
        try {
          onAddPost(contentsRef.current.value);
          return true;
        } catch (e) {
          alert(e.message);
        }
      };
      handleFormSubmit(event, callback);
    },
    [onAddPost, handleFormSubmit]
  );

  useLayoutEffect(() => {
    const handleContentInput = () => {
      const scrollHeight = contentsRef.current.scrollHeight;
      if (scrollHeight !== formHeight) {
        setFormHeight(scrollHeight);
      }
    };
    contentsRef.current.addEventListener('input', handleContentInput);
    return () => {
      contentsRef.current.removeEventListener('input', handleContentInput);
    };
  }, [contentsRef]);

  return (
    <>
      <form onSubmit={handlePostSubmit}>
        <textarea
          className="form-control input-lg"
          placeholder="무슨 생각을 하고 계신가요?"
          spellCheck="false"
          style={{ height: formHeight + 'px' }}
          ref={contentsRef}
        />
        <button type="submit" className="btn btn-primary">
          공유하기
        </button>
      </form>
      <style jsx>{WriteFormStyle}</style>
    </>
  );
};

const WriteFormStyle = css`
  form {
    margin-bottom: 100px;
  }

  textarea.form-control {
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

export default React.memo(PostForm);

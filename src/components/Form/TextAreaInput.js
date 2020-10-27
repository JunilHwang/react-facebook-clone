import React from 'react';
import classNames from 'classnames';
import { useAutoHeight } from '@/hooks';
import css from 'styled-jsx/css';

const TextAreaInput = ({ field, form, className, ...props }) => {
  const { touched, errors } = form;
  const hasError = touched[field.name] && errors[field.name];
  const $textarea = useAutoHeight();

  return (
    <div>
      <textarea {...field} {...props} ref={$textarea} className={classNames(className, { error: hasError })} />
      {hasError && <div className="error">{errors[field.name]}</div>}
      <style jsx>{textareaStyles}</style>
    </div>
  );
};

const textareaStyles = css`
  div {
    margin-bottom: 1rem;
  }

  textarea.error {
    border: 1px solid red !important;
  }

  div.error {
    color: red;
    margin-bottom: 1px;
  }
`;

export default TextAreaInput;

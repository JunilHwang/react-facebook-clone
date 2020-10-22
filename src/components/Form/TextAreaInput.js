import React from 'react';
import classNames from 'classnames';
import useAutoHeight from '@/hooks/useAutoHeight';

const TextAreaInput = ({ field, form, className, lineHeight = 20, ...props }) => {
  const { touched, errors } = form;
  const hasError = touched[field.name] && errors[field.name];
  const [textareaEl] = useAutoHeight(lineHeight, field.value);

  return (
    <div>
      <textarea ref={textareaEl} {...field} {...props} className={classNames(className, { error: hasError })} />
      {hasError && <div className="error">{errors[field.name]}</div>}
      <style jsx>
        {`
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
        `}
      </style>
    </div>
  );
};

export default TextAreaInput;

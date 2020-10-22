import React from 'react';
import classNames from 'classnames';

const BaseInput = ({ field, form, className, ...props }) => {
  const { touched, errors } = form;
  const hasError = errors[field.name];
  return (
    <div>
      <input {...field} {...props} className={classNames(className, { error: hasError })} />
      {hasError && <div className="error">{errors[field.name]}</div>}
      <style jsx>
        {`
          div {
            margin-bottom: 1rem;
          }

          input.error {
            border: 1px solid red;
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

export default BaseInput;

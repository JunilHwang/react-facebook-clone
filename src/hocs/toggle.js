import React from 'react';

function toggle(WrappedComponent) {
  return function ToggleWrapped(props) {
    return props.show ? <WrappedComponent {...props} /> : false;
  };
}

export default toggle;

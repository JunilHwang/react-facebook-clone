import React from 'react';

const Conditional = ({ condition, children }) => <>{condition && children}</>;

export default Conditional;

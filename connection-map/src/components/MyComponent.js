import React, { useState } from 'react';

const MyComponent = () => {
  const [state, setState] = useState('Hello World');
  return <div>{state}</div>;
};

export default MyComponent;

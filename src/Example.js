import React from 'react';
import { useDencrypt } from 'use-dencrypt-effect';

const values = [
  'SOFTWARE ENGINEER',
  'CODER',
  'PROGRAMMER',
  'DEVELOPER',
  'DESIGNER',
];

const Example = () => {
  const { result, dencrypt } = useDencrypt();

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 3000);

    return () => clearInterval(action);
  }, []);

  return <h1>{result}</h1>;
};

export default Example;

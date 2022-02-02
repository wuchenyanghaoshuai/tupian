import React, { useEffect, useState } from 'react';

const Child = () => {
  const [test, setTest] = useState({
    a: '123',
    b: '222'
  });
  const t = () => {
    setTest({
      a: 'cccc',
      b: 'aaaa'
    });
  };
  return <div onClick={t}>im child{test.a}</div>;
};
export default Child;

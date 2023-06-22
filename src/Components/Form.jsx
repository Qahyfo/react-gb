import React, { useState } from 'react';

export default function Form() {
  const [count, setCount] = useState(0);

  const hangleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ display: 'block' }}>
      <span>{count}</span>
      <button type="button" onClick={hangleClick}>
        Отправить {count}
      </button>
    </div>
  );
}

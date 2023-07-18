import React, { useState } from 'react';
import { AUTHOR } from '../../constants';
import { Button } from './components/Button';

const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage({
      author: AUTHOR.user,
      value,
    });
    setValue('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button label="send" disabled={!value} />
      <button disabled={!value}>Send</button>
    </Form>
  );
};
export default Form;

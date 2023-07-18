import React from 'react';

const MessageList = ({ message }) => {
  return (
    <ul>
      {message.map((message, index) => {
        <li key={index}>
          {message.author}:{message.value}
        </li>;
      })}
    </ul>
  );
};

export default MessageList;

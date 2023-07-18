import { useEffect, useState } from 'react';
import Form from './Components/Form/Form';
import MessageList from './Components/MessageList/MessageList';
import { AUTHOR } from './constants';

function App() {
  const [messages, setMessages] = useState([]);

  const addMessage = () => {
    setMessages((prevMessages) => [...prevMessages, setMessages]);
  };

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].author === AUTHOR.user
    ) {
      const timeout = setTimeout(() => {
        addMessage({
          author: AUTHOR.bot,
          value: 'Im BOT',
        });
      }, 1000);

      return () => clearTimeout(timeout)
    }
  }, [messages]);

  return (
    <div className="App">
      <MessageList messages={messages} />
      <Form addMessage={addMessage} />
    </div>
  );
}

export default App;

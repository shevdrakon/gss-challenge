import React, {useState} from 'react'

import TextField from '../../../src/client/components/text-field/text-field'
import Button from '../../../src/client/components/buttons/button'
import Message from '../../../src/client/components/message/message';

import styles from './messages-list.module.scss';

const initialMessages = [
  {
    type: Message.types.left,
    text: 'Your food is ready and on it’s way. It’ll be with you in 8 min!'
  },
  {
    type: Message.types.right,
    text: 'We’re on the second floor. Thanks!!'
  },
  {
    type: Message.types.left,
    text: 'Got it!'
  },
];

const MessagesList = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputText, setInputText] = useState('');

  const handleSendMessageClick = () => {
    if (!inputText && !inputText.length)
      return;

    const nextMessage = {
      text: inputText,
      type: Message.types.left,
    };

    setMessages(prevState => [...prevState, nextMessage]);
    setInputText('');
  };

  return (
    <div className={styles.messagesList}>
      <div className={styles.messagesList__items}>
        {messages.map((x, index) => (
            <Message key={index} type={x.type} className={styles.messagesList__message}>
              {x.text}
            </Message>
          )
        )}
      </div>
      <div className={styles.messagesList__textFieldContainer}>
        <TextField className={styles.messagesList__input}
                   placeholder="Type a message"
                   value={inputText}
                   onChange={setInputText} />
        <Button className={styles.messagesList__sendButton} onClick={handleSendMessageClick}>
          Send
        </Button>
      </div>
    </div>
  )
}

export default MessagesList;

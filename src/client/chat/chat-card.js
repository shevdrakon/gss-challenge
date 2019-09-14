import React, {useState} from 'react';

import Content from '../components/layout/content';
import Card from '../components/card/card';
import TextField from '../components/text-field/text-field';

import SendMessageButton from '../components/buttons/send-message-button';
import SendCommandButton from '../components/buttons/send-command-button';

import styles from './chat-card.module.scss';
import {Column} from '../components/layout/responsive';
import ChatMessages from './chat-messages';

import connect from '../store/connect';
import {RoboIcon} from "../components/icons";

export const ChatCard = (props) => {
  const [text, setText] = useState('');
  const {sendMessage, sendCommand} = props;

  const handleSendMessageClick = () => {
    sendMessage(text);
  };

  const handleSendCommandClick = () => {
    sendCommand();
  }

  return <Content className={styles.content}>
    <Column className={styles.content__container} md={10} sm={10} xs={12}>
      <Card className={styles.card}>
        <header className={styles.card__header}>
          <h4 className={styles.card__header__title}>
            <RoboIcon className={styles.card__header__icon} />
            Chat with bot
          </h4>
        </header>
        <ChatMessages className={styles.chat__messages} />
        <div className={styles.chat__controls}>
          <div className={styles.chat__controls__input}>
            <TextField
              debounceTimeout={300}
              value={text}
              placeholder="Type a message"
              onChange={setText}
            />
          </div>
          <SendMessageButton onClick={handleSendMessageClick} className={styles.chat__controls__send} />
          <SendCommandButton onClick={handleSendCommandClick} className={styles.chat__controls__command} />
        </div>
      </Card>
    </Column>
  </Content>
}

export default connect(ChatCard);

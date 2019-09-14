import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../components/layout/layout';
import ChatCard from './chat-card';

const ChatPage = ({className}) => {
  return <Layout className={className}>
    <ChatCard />
  </Layout>
};

ChatPage.propTypes = {
  className: PropTypes.string,
};

export default ChatPage;

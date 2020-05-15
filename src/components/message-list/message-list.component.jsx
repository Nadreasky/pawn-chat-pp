import React from 'react';

import Message from '../message/message.component';

import './message-list.styles.scss';

const MessageList = () => {
  return (
    <div className='chat-area'>
      <Message />
      <Message mine />
      <Message />
    </div>
  );
}

export default MessageList;
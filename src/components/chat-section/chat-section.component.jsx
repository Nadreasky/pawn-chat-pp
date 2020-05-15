import React from 'react';

import { ReactComponent as SendIcon } from '../../assets/images/send-icon.svg';
import ChatFriendInfo from '../chat-friend-info/chat-friend-info.component';
import MessageList from '../message-list/message-list.component';


import './chat-section.styles.scss';

const ChatSection = () => {
  return (
    <div className='chatting-section'>
      <ChatFriendInfo />
      <MessageList />
      <div className='message-input-wrapper'>
        <input type='text' className='message-input' />
        <SendIcon className='send-icon' />
      </div>
    </div>
  );
}

export default ChatSection;
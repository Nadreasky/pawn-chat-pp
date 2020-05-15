import React from 'react';

import FriendList from '../friend-list/friend-list.component';
import ChatSection from '../chat-section/chat-section.component';

import './chatting.styles.scss';


const ChattingComponent = () => (
  <div className='chatting'>
    <FriendList />
    <ChatSection />
  </div>
);

export default ChattingComponent;
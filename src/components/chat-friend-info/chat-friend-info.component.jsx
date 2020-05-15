import React from 'react';

import { ReactComponent as AvatarPlaceholder } from '../../assets/images/avatar-placeholder.svg';

import './chat-friend-info.styles.scss';

const ChatFriendInfo = () => {
  return (
    <div className='friend-info'>
      <AvatarPlaceholder className='avatar' />
      <span className='name'>Huynh Thanh Quy</span>
    </div>
  );
}

export default ChatFriendInfo;
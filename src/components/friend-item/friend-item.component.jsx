import React from 'react';

import { ReactComponent as AvatarPlaceholder } from '../../assets/images/avatar-placeholder.svg';

import './friend-item.styles.scss';

const FriendItem = () => (
  <div className='friend-item'>
    <AvatarPlaceholder className='avatar' />
    <div className='summarize'>
      <p className='friend-name'>Huynh Thanh Quy</p>
      <span className='last-message'>Let's fuk and fuk really extremely super hard kkkkkkkk</span>
    </div>
  </div>
);

export default FriendItem;
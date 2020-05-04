import React from 'react';

import './chatting.styles.scss';
import { ReactComponent as AvatarPlaceholder } from '../../assets/images/avatar-placeholder.svg';
import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg';
import { ReactComponent as SendIcon } from '../../assets/images/send-icon.svg';

const ChattingComponent = () => (
  <div className='chatting'>
    <div className='friend-list-section'>
      <div className='search-area'>
        <SearchIcon className='search-icon' />
        <input type="text" className='searchInput' />
      </div>
      <div className='friend-list-wrapper'>
        <div className='friend-item'>
          <AvatarPlaceholder className='avatar' />
          <div className='summarize'>
            <p className='friend-name'>Huynh Thanh Quy</p>
            <span className='last-message'>Let's fuk and fuk really extremely super hard kkkkkkkk</span>
          </div>
        </div>
        <div className='friend-item'>
          <AvatarPlaceholder className='avatar' />
          <div className='summarize'>
            <p className='friend-name'>Huynh Thanh Quy</p>
            <span className='last-message'>Let's fuk and fuk really extremely super hard kkkkkkkk</span>
          </div>
        </div>
        <div className='friend-item'>
          <AvatarPlaceholder className='avatar' />
          <div className='summarize'>
            <p className='friend-name'>Huynh Thanh Quy</p>
            <span className='last-message'>Let's fuk and fuk really extremely super hard kkkkkkkk</span>
          </div>
        </div>
      </div>
    </div>
    <div className='chatting-section'>
      <div className='friend-info'>
        <AvatarPlaceholder className='avatar'/>
        <span className='name'>Huynh Thanh Quy</span>
      </div>
      <div className='chat-area'>

      </div>
      <div className='message-input-wrapper'>
        <input type='text' className='message-input' />
        <SendIcon className='send-icon' />
      </div>
    </div>
  </div>
);

export default ChattingComponent;
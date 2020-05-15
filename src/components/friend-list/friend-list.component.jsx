import React from 'react';

import FriendItem from '../friend-item/friend-item.component';
import { ReactComponent as SearchIcon } from '../../assets/images/search-icon.svg'; 

import './friend-list.styles.scss';

const FriendList = () => {
  return (
    <div className='friend-list-section'>
      <div className='search-area'>
        <SearchIcon className='search-icon' />
        <input type="text" className='searchInput' />
      </div>
      <div className='friend-list-wrapper'>
        <FriendItem />
        <FriendItem />
        <FriendItem />
      </div>
    </div>
  );
}

export default FriendList;
import React from 'react';

import './message.styles.scss';

const Message = ({ mine }) => {
  return (
  <div className={`chatting-message ${mine ? 'mine' : ''}` }>
    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus massa eget convallis ullamcorper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</span>
  </div>
)};

export default Message;
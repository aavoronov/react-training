import React from 'react';

function Message(props) {
  return (
    <div className="content__message">
      {props.text}
    </div>
  )
}

export default Message;
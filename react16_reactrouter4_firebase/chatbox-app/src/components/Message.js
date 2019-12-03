import React from 'react'

const Message = ({ pseudo, message }) => {
  return (
    <p className='user-message'>
      <span className="pseudo">{pseudo}</span> 
      <span className="message">{message}</span>
    </p>
  )
}

export default Message

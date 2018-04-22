import React from 'react';

const Message = ({chat, user}) => (
    <li className={`chat ${user === chat.firstname ? "right" : "left"}`}>
         <img src={chat.profilepic} />
         <h6>{chat.firstname}:</h6>
        {chat.message}
    </li>
);

export default Message;
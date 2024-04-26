import React, { Component } from 'react'
import ChatMember from './ChatMember'
import "./Chat.css"

export class ChatUser extends Component {
  render() {
    return (
        <>
      <div className='Chat_User'>
        <div className='Chat_user_header'>
          <div className='Chat_user_header_title'>Wide</div>
        </div>
        <ChatMember></ChatMember>
      </div>
      </>
    )
  }
}

export default ChatUser
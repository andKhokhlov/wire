import React, { Component } from 'react'
import ChatUser from '../components/Chat/ChatUser'
import ChatMesseger from '../components/Chat/ChatMesseger'

export class Chat extends Component {
  render() {
    return (
      <div className='Chat_Container'>
        <ChatUser></ChatUser>
        <ChatMesseger></ChatMesseger>
      </div>
    )
  }
}

export default Chat
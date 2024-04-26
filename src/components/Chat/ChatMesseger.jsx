import React, { Component } from 'react'
import memeber from '../../img/man.png'
export class ChatMesseger extends Component {
  render() {
    return (
      <div className='Chat_form'>
        <div className='Chat_form_head'>
            <div>
            <img className='Face_member_logo' src={memeber} alt='Face'></img>
            </div>
            <div className='Chat_mes_head_title'>Ivan</div>
        </div>
        <div className='Chat_messeger'>
            <div className='Chat_messeger_messeg'></div>
        </div>
        <div className='Chat_footer'>
            <div className='Chat_footer_send'>
                <input className='Chat_footer_send_input'></input>
            </div>
        </div>
      </div>
    )
  }
}

export default ChatMesseger
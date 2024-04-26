import React, { Component } from 'react'
import memeber from '../../img/man.png'

export default class ChatMember extends Component {
  render() {
    return (
      <div className='Member_tab'>
        <div className='Face_member'>
          <img className='Face_member_logo' src={memeber} alt='Face'></img>
          <div className='Face_member_title'> Nick</div>
        </div>
        <div className='Face_member'>
          <img className='Face_member_logo' src={memeber} alt='Face'></img>
          <div className='Face_member_title'> ivan</div>
        </div>
        <div className='Face_member'>
          <img className='Face_member_logo' src={memeber} alt='Face'></img>
          <div className='Face_member_title'> Nick</div>
        </div>
      </div>
    )
  }
}

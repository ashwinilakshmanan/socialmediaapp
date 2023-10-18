import React from 'react'
import './rightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from "@iconscout/react-unicons"
import TrendCard from '../trendCard/TrendCard'
function RightSide() {
  return (
    <>
      <div className='rightSide'>
        <div className='navIcons'>
            <img src={Home} alt='home icon'/>
            <UilSetting />
            <img src={Noti} alt='notification'/>
            <img src={Comment} alt='comment'/>
        </div>


      <TrendCard/>  

      <button className='button r-button'>Share</button>
      </div>
    </>
  )
}

export default RightSide

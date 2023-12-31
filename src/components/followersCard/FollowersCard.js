import React from 'react'
import './followersCard.css'
import { Followers } from '../../Data/FollowersData'
function FollowersCard() {
  return (
    <>
    <div className='followersCard'>
    <h3>who is following you</h3>
    {
        Followers.map((follower,id)=>{
            return(
                <div className='follower'>
                    <div>
                        <img src={follower.img} alt='' className='followerImage'/>
                        <div className='name'>
                            <span>{follower.name}</span>
                            <span>@{follower.username}</span>
                        </div>
                    </div>
                    <button className='button fc-button'>Follow</button>
                </div>
            )
        })
    }
    </div>
      
    </>
  )
}

export default FollowersCard

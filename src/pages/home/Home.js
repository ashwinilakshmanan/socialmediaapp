import React from 'react'
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'
import PostSide from '../../components/postSide/PostSide'

function Home() {
  return (
    <>
      <div className='Home'>
        <ProfileSide/>
        <div className='postSide'>
         
          <PostSide/>
        </div>
        <div className='rightSide'>Right side</div>
      </div>
    </>
  )
}

export default Home

import React from 'react'
import './profile.css'
import ProfileLeft from '../../components/profileLeft/ProfileLeft'
import ProfileCard from '../../components/profileCard/ProfileCard'
import PostSide from '../../components/postSide/PostSide'
import RightSide from '../../components/rightSide/RightSide'


function Profile() {
  return (
    <>
      <div className='profile'>
        <ProfileLeft/>

        <div className='profileCenter'>
            <ProfileCard location ="profilePage"/>
            <PostSide/>
        </div>

        <RightSide/>
      </div>
    </>
  )
}

export default Profile

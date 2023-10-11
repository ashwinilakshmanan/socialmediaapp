import React from 'react'
import LogoSearch from '../logoSearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import './profileSide.css';
import FollowersCard from '../followersCard/FollowersCard';

function ProfileSide() {
    return (
        <>
            <div className='profileSide'>
                <LogoSearch />
                <ProfileCard/>
                <FollowersCard/>
            </div>
        </>
    )
}

export default ProfileSide

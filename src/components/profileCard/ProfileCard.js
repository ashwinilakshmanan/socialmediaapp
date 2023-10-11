import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profile2.jpg'
import './profileCard.css'

function ProfileCard() {
    return (
        <>
            <div className='profileCard'>
                {/* profile image and cover img */}
                <div className='profileImage'>
                    <img src={Cover} alt='' />
                    <img src={Profile} alt='' />
                </div>

                {/* profile name */}
                <div className='profileName'>
                    <span>Anna Maria</span>
                    <span>Senior UI/UX Designer</span>
                </div>

                {/* followers and following */}
                <div className='followStatus'>
                    <hr />
                    <div>
                        <div className='follow'>
                            <span>1,250</span>
                            <span>Followers</span>
                        </div>
                        <div className='vl'></div>
                        <div className='follow'>
                            <span>1</span>
                            <span>Following</span>
                        </div>
                    </div>
                    <hr />
                </div>

                <span>
                    MyProfile
                </span>
            </div>

        </>
    )
}

export default ProfileCard

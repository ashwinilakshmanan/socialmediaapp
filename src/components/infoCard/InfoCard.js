import React, { useState } from 'react'
import './infoCard.css'
import { UilPen } from '@iconscout/react-unicons'
import ProfileModal from '../profileModal/ProfileModal'



function InfoCard() {

    const[modalOpen,setModalOpen] = useState(false) 
    return (
        <>
   
            <div className='infoCard'>
                <div className='infoHead'>
                    <h4>Your Info</h4>
                    <div>
                        <UilPen width='2rem' height='1.2rem' onClick ={()=>setModalOpen(true)}/>
                        <ProfileModal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                    </div>
                </div>

                <div className='info'>
                    <span>
                        <b>Status </b>
                    </span>
                    <span>in RelationShip</span>
                </div>

                <div className='info'>
                    <span>
                        <b>Lives in </b>
                    </span>
                    <span> America</span>
                </div>

                <div className='info'>
                    <span>
                        <b>Work at </b>
                    </span>
                    <span> Google</span>
                </div>

                <button className='button logout-button'>Logout</button>

            </div>
           
        </>
    )
}

export default InfoCard

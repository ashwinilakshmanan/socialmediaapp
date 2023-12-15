import React, { useState, useRef } from 'react'
import Profile from '../../img/profile2.jpg'
import './postShare.css'
import { UilScenery } from "@iconscout/react-unicons"
import { UilPlayCircle } from "@iconscout/react-unicons"
import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"
import { useDispatch, useSelector } from 'react-redux'
import { uploadImage } from '../../actions/uploadAction'

function PostShare() {

    const [image, setImage] = useState(null);
    const imageRef = useRef();
    const desc = useRef()
    const dispatch = useDispatch();
    const {user}= useSelector((state)=>state.authReducer.authData)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        const newPost= {
            userId: useRef._id,
            desc: desc.current.value
        }

        if(image){
            const data = new FormData()
            const filename = Date.now() + image.name
            data.append("name",filename)
            data.append("file",image)
            newPost.image = filename
            console.log(newPost);
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error);
            }
        }
    }
    return (
        <>
            <div className='postShare'>
                <img src={Profile} alt='profileimg' />
                <div>
                    <input type='text' placeholder="What's Happening" ref={desc} required />
                    <div className='postOptions'>
                        <div className='option' style={{ color: "var(--photo)" }} onClick={() => { imageRef.current.click() }}>
                            <UilScenery />
                            Photo
                        </div>
                        <div className='option' style={{ color: "var(--video)" }}>
                            <UilPlayCircle />
                            Video
                        </div>
                        <div className='option' style={{ color: "var(--location)" }}>
                            <UilLocationPoint />
                            Location
                        </div>
                        <div className='option' style={{ color: "var(--shedule)" }}>
                            <UilSchedule />
                            Schedule
                        </div>
                        <button className='button ps-button' onClick={handleSubmit}>Share</button>
                        <div style={{ display: 'none' }}>
                            <input type='file' name='myImage' ref={imageRef} onChange={onImageChange} />
                        </div>
                    </div>

                    {/* to display the selected image */}

                    {image && (
                        <div className='previewImage'>
                            <UilTimes onClick={()=>setImage(null)}/>
                            <img src={URL.createObjectURL(image)} alt='selected image'/>
                            
                        </div>
                    )}
                </div>

            </div>

        </>
    )
}

export default PostShare

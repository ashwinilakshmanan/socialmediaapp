import React from 'react'
import './post.css'
import Like from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'

function Post({data}) {
  return (
    <div className='post'>
        <img src={data.img} alt='post image'/>

        <div className='postReact'>
            <img src={data.liked? Like: NotLike} alt='like/dislike'/>
            <img src={Comment} alt='comment'/>
            <img src={Share} alt='share'/>
        </div>

        <span>{data.likes} likes</span>

        <div className='details'>
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
      
    </div>
  )
}

export default Post

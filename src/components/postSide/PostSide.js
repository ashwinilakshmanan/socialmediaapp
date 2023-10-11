import React from 'react'
import PostShare from '../postShare/PostShare'
import Posts from '../posts/Posts'

function PostSide() {
    return (
        <>
            <div className='postSide'>
            <PostShare/>
            <Posts/>
            </div>
        </>
    )
}

export default PostSide

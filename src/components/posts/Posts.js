import React, { useEffect } from 'react'
import Post from '../post/Post'
import './posts.css'
import { useDispatch, useSelector } from 'react-redux'
import { getTimelinePosts } from '../../actions/postAction';

function Posts() {

  const dispatch = useDispatch();
  const {user}= useSelector((state)=>state.authReducer.authData)
  const {posts,loading} = useSelector((state)=>state.postReducer)

  useEffect(()=>{
    dispatch(getTimelinePosts(user._id))
  },[])
  return (
    <>
    <div className='posts'>
   {loading ? "Fetching posts..." : posts.map((post,id)=>{
    return<Post data ={post} id ={id}/>
   })}
    </div>
      
    </>
  )
}

export default Posts

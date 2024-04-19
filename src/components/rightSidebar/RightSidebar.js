import React from 'react'
import {CiSearch} from "react-icons/ci"
import posts from './data'
import Avatar from 'react-avatar'
const RightSidebar = () => {
  return (

    <div className='  md:block hidden  '>
      <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none ml-6 '>
        <CiSearch/>
        <input type='text' placeholder='Search...' className='p-2 
        bg-gray-100 rounded-full outline-none '/>

        </div>

        <div className='p-4 bg-gray-100 rounded-2xl my-4 ml-6' >
          <h1 className='text-black  font-bold text-xl'>Subscribe to Premium</h1>
          <div>
            <p className='text-sm'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
            <button className='text-white bg-black rounded-full p-3 m-3 font-bold'>Subscribe</button>
          </div>
        </div>





      <div className='p-4 bg-gray-100 rounded-2xl my-4 ml-6'>
        <div>
          <h1 className='text-black font-bold text-xl '> What’s happening</h1>
        </div>

        <div>
      {posts.map((post) => (
        <div key={post.id} className='mt-4  hover:bg-gray-300 delay-100 cursor-pointer'>
          <p className='text-black opacity-30 text-sm'>{post.trend}</p>
          <h1 className='font-bold'>{post.hashtag}</h1>
          <span className='text-black opacity-30 text-sm'>{post.postsCount}</span>
        </div>
      ))}
    </div>
</div>


<div className='p-4 bg-gray-100 rounded-2xl my-4 ml-6'>
  <h1 className='text-black font-bold text-xl'>Who to follow</h1>
  <div className='flex items-center ml-1 mt-3 hover:bg-gray-400 hover:opacity-80 hover:rounded-xm cursor-pointer'>
    <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" className='rounded-full' size={"40px"} /> 
    <div className="ml-3">
      <h1 className='font-bold'>Priyansh Agarwal</h1>
      <p className='text-black placeholder-opacity-45 text-sm'>@Priyansh_31Dec</p>
    </div>
  </div>
  <div className='flex items-center ml-1 mt-3 hover:bg-gray-400 hover:opacity-80 hover:rounded-xm cursor-pointer'>
    <Avatar src="https://randomuser.me/api/portraits/women/10.jpg" className='rounded-full' size={"40px"} /> 
    <div className="ml-3">
      <h1 className='font-bold'>Seeta kapoor</h1>
      <p className='text-black placeholder-opacity-45 text-sm'>@Chandac</p>
    </div>
  </div>
</div>

 
</div>  
 
  )
}

export default RightSidebar
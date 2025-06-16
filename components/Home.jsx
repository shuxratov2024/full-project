import React from 'react'
import Navbar from './Navbar'
import PostCard from './PostCard'
import "../styles/Home.css"

function Home() {
  return (
    <div className="Home">
        <Navbar/>
        <PostCard/>
    </div>
  )
}

export default Home
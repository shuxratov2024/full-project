import React, { useState } from 'react'
import Navbar from './Navbar'
import PostCard from './PostCard'
import "../styles/Home.css"

function Home() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  return (
    <div className="Home">
        <Navbar setRefreshTrigger={setRefreshTrigger}/>
        <PostCard refreshTrigger={refreshTrigger}/>
    </div>
  )
}

export default Home
import React from 'react'
import Habits from './Habits'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <div className='heading'>
      Habits
      
    </div>
    <div className='text'>
      Lets Make our life easier
    </div>
      <Navbar name="Detail View"/>
      <Habits/>
    </>
  )
}

export default Home
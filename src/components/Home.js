import React from 'react'
import Habits from './Habits'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <div className='heading'>
      My Habits
    </div>
      <Navbar name="Detail View"/>
      <Habits/>
    </>
  )
}

export default Home
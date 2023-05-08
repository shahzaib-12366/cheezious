import React from 'react'
import HeaderTextCarousel from '../components/HeaderTextCrousel';
import Navbar from '../components/Navbar';
import Delivery from '../components/Delivery';
import Buttons from '../components/Buttons';
// import Login from '../components/Login'
import Search from '../components/Search';

const Home = () => {
  return (
    <>
    <HeaderTextCarousel/>
    <Navbar/>
    <Delivery/>
    <Buttons/>
    {/* <Login/> */}
<Search/>
    
    </>
  )
}

export default Home
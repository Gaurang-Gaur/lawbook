import React from 'react'
import HeroSection from './components/HeroSection'

const Home = () => {





  const data={
    name:"Law Book",
    image:"./images/hero.jpg",
    desc:" Our website will be providing you 24X7 support and guidance to you, Whenever you search for any case, you will be shown a section of victim and accused. It provides knowledge and support to both and help them to know what and how can they fight for justice or to defend themselves.",
    
    top:"law   without a justice is a wound without a cure",
  }
  return (
    <HeroSection {...data}/>
  )
}

export default Home
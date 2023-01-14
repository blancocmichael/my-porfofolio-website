import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT ME" text="I am a computer science student at the College of Charleston with a passion for software development, constantly seeking to improve my skills and deliver innovative solutions."/>
      <Footer/>
    
    </div>
  )
}

export default About;
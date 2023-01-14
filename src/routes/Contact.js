import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';

const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="Contact me here : " text="hank you for visiting my portfolio website. If you have any questions or would like to work with me, please feel free to reach out by filling out the contact form or by emailing me at [blancochavezm@g.cofc.edu]. 
       I look forward to hearing from you!"/>
        <Footer /> 
    </div>
  )
}

export default Contact;
import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';
const Contact = () => {
  return (
    <div>
       <Navbar/>
       <HeroImg2 heading="Contact me here : " text="Thank you for visiting my portfolio website. If you have any questions or would like to work with me, please feel free to reach out by filling out the contact form or by emailing me at [blancochavezm@g.cofc.edu]. 
       I look forward to hearing from you!"/>
       <Form />
        <Footer /> 
    </div>
  )
}

export default Contact;
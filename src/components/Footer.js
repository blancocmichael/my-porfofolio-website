import "./FooterStyles.css"
import React from 'react'
import { FaMailBulk, FaGithubAlt, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container"> 
        <div className="left">
            <div className="github">
                <FaGithubAlt size={20} style={{color: "#fff", marginRight: "2rem"}}/> 
                <p> migueBlanc</p>
            </div>
            <div className="email">
                <h4> 
                    <FaMailBulk size={20} style={{marginRight: "2rem"}}/> 

                    guesswhoblanco@gmail.com
                 </h4>
            </div>

        </div>
        <div className="right">
                <h4> Love what I do?</h4>
                <p> These are some of the other socials I use, 
                    while not very active I try to section my content to different socials.</p>
                   
        </div>
        
        </div>
    </div>
  )

}

export default Footer
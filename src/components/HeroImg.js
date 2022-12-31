import "./HeroImgStyle.css";
import React from "react";
import IntroImg from "../assets/img/heroPic1.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div classname="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="heroImage"/>
        </div>
        <div className="content">
            <p> Hi, I like computers </p>
            <h1> Software Engineer</h1>
            <div class="a">
                <Link to="/projects" className="btn"> Projects </Link>

                <Link to="/contact" className="btn btn-light"> Contact </Link>
            </div>
        </div>
    </div>
  );
};

export default HeroImg
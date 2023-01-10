import "./ProjectCardStyles.css";
import React from 'react';
import { NavLink } from "react-router-dom";


const ProjectCard = (props) => {
  return (
    <div className="project-card">
                    <img src={props.imgsrc} alt="image" />
                    <h2 className="project-title">{props.title}</h2>
                    <div className="project-details">
                        <p> {props.text}</p>
                    </div>
                        <div className="pro-buttons">
                        <NavLink to={props.view} className="btn"> 
                            Source Code
                        </NavLink> 
                        <NavLink to={props.source} className="btn"> 
                            View
                        </NavLink>
                        </div>

                    
                </div>
  )
}

export default ProjectCard;
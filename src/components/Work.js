import "./ProjectCardStyles.css";
import React from 'react';
import ProjectCard from "./ProjectCard";
import WorkCardData from "./workCardData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading"> Projects </h1>
            <div className="project-container"> 
            {WorkCardData.map((val, ind) => {
                return(
                    <ProjectCard 
                    key={ind} 
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    souurce={val.source}
                    />
                )
            })}
            </div>
    </div>
  )
}

export default Work;
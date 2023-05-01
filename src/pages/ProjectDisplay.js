import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

import { IconButton } from '@material-ui/core';
function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const redirectToUrl = (url) => {
    window.location.href = url;
  }
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="img"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <IconButton aria-label="github" onClick={() => redirectToUrl(project.git)}><GitHubIcon /></IconButton>
    </div>
  );
}

export default ProjectDisplay;

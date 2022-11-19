import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="border-2 rounded-md p-3 flex flex-col">
      <h4>{props.title}</h4>
      <img src={props.img} alt="" />
      <p>{props.text}</p>
    </div>
  );
};

export default ProjectCard;

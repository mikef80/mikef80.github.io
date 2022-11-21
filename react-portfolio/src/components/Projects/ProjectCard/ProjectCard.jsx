import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="border-2 rounded-md p-3 flex flex-col">
      <h4>{props.title}</h4>
      {/* <img src={props.img} alt="" width='100%' height='1000px' className="object-cover h-1000 w-full"/> */}
      <p>{props.text}</p>
    </div>
  );
};

export default ProjectCard;

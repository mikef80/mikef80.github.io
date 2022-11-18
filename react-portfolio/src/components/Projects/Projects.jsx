import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      Projects
      <button onClick={() => navigate("/")}>Go Home</button>
      <button onClick={() => navigate("/contact")}>Go To Contact</button>
    </div>
  );
};

export default Projects;

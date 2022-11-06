import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      About
      <button onClick={() => navigate("/")}>Go Home</button>
      <button onClick={() => navigate("/contact")}>Go To Contact</button>
    </div>
  );
};

export default About;

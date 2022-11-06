import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { email } = useParams();
  return <div>Contact {email}</div>;
};

export default Contact;

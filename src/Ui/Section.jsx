import React from "react";
import "./Section.scss";

const Section = (props) => {
  return <div className={`section ${props.className}`}> {props.children} </div>;
};

export default Section;

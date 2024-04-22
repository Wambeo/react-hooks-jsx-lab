import React from "react";
import { image } from "../data/data";

function About() {
  return (<div id = "about">
    <h2>About Me</h2>
    <p>This is such a fun thing to do.</p>
    <img src = {image} alt = "I made this" />
  </div>);
}

export default About;

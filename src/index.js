//Create a react app from scratch.
import React from "react";
import ReactDome from "react-dom";
//It should display 2 paragraph HTML elements.
const createdBy = "Ahmad Alshbli";
const copyRight = new Date().getFullYear();
ReactDome.render(
  <div>
    <p>Created by {`${createdBy} Copyright ${copyRight}`} </p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

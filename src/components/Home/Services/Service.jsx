import React from "react";
import "../../../style/services.css";

const Service = (props) => {
  return (
    <div class="col animate__animated animate__fadeInUp animate__delay-2s">
      <a href="#diet">
        <i class={props.icon}></i>
        <h1>{props.title}</h1>
        <p>{props.deskripsi}</p>
      </a>
    </div>
  );
};

export default Service;

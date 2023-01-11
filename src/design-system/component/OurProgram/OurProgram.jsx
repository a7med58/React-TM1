import { faClock, faMapMarked } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {IconWarper, ImageWarper, ImgCic, OurProgramWarper } from "./Style";

export default function OurProgram({img,alt,time,location,title,by,artical}) {
  return (
    <OurProgramWarper>
      <ImageWarper>
        <ImgCic src={img} alt={alt} />
      </ImageWarper>
      <div>
        <IconWarper>
          <div>
            <FontAwesomeIcon icon={faClock} /> {time}
          </div>
          <div>
            <FontAwesomeIcon icon={faMapMarked} /> {by}
            </div>
        </IconWarper>
        <h2>{title}</h2>
        <span>BY {by}</span>
        <p>{artical}</p>
      </div>
    </OurProgramWarper>
  );
}

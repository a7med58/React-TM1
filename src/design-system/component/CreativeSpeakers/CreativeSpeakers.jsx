import React from "react";
import { SpeakersWarper, CompanyName, Nationality } from "./Style";




export default function CreativeSpeakers({companyname,nationality,alt,img}) {
  return (
    <SpeakersWarper>
      <CompanyName>{companyname}</CompanyName>
      <Nationality>{nationality}</Nationality>
      <img src={img} alt={alt} width="100%" />
    </SpeakersWarper>
  );
}

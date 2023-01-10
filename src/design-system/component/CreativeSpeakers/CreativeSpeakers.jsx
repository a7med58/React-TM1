import React from "react";
import { CompanyName, Nationality, SpeakersWarper } from "./Style";

export default function CreativeSpeakers({
  companyname,
  nationality,
  alt,
  img,
}) {
  return (
    <SpeakersWarper>
      <img src={img} alt={alt} width="50%" />
      <CompanyName>{companyname}</CompanyName>
      <Nationality>{nationality}</Nationality>
    </SpeakersWarper>
  );
}

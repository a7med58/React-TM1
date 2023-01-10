import React from "react";
import { SpeakersWarper, CompanyName, Nationality } from "./Style";




export default function CreativeSpeakers(companyname,nationality) {
  return (
    <SpeakersWarper>
      <CompanyName>companyname</CompanyName>
      <Nationality>nationality</Nationality>
    </SpeakersWarper>
  );
}

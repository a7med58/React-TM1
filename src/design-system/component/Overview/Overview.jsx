import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { OverviewWarper, Title, Descrip, ByWrite } from "./Style";
export default function Overview({ icon, title, description, by }) {
  return (
    <OverviewWarper>
      <div>
        <FontAwesomeIcon color="#D3756B" icon={icon} />
      </div>
      <Title>{title}</Title>
      <Descrip>{description}</Descrip>
      <ByWrite>{by}</ByWrite>
    </OverviewWarper>
  );
}
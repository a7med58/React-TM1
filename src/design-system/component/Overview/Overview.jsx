import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function Overview({ icon, title, description, by }) {
  return (
    <div>
      <div>
        <FontAwesomeIcon icon={icon} />
        <p>{title}</p>
        <p>{description}</p>
        <h3>{by}</h3>
      </div>
    </div>
  );
}

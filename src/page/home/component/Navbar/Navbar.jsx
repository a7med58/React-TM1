import React from "react";
import { NavbarWarper, Navcontainer, Navtitle } from "./Style";
export default function Navbar() {
  return (
    <NavbarWarper>
      <div className="container">
        <Navcontainer>
          <Navtitle>The Eagle </Navtitle>
          <div>Links</div>
        </Navcontainer>
      </div>
    </NavbarWarper>
  );
}

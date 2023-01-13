import React from "react";
import links from "./Links";
import NavLinks from "./NavLinks";
import { LinksWarper, NavbarWarper, Navcontainer, Navtitle } from "./Style";
export default function Navbar() {
  return (
    <NavbarWarper>
      <div className="container">
        <Navcontainer>
          <Navtitle>The Eagle </Navtitle>
          <LinksWarper>
            {links.map((link, index) => {
              return (
                <NavLinks
                  key={index}
                  navLink={link.navLink}
                  navText={link.navText}
                />
              );
            })}
          </LinksWarper>
        </Navcontainer>
      </div>
    </NavbarWarper>
  );
}

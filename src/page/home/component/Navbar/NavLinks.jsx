import React from "react";
import themes from "../../../../design-system/config";
import { Link } from "./Style";

export default function NavLinks({ navLink, navText, active }) {
  return (
    <Link color={active ? themes.active : ""} href={navLink}>
      {navText}
    </Link>
  );
}

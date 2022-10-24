import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const link = links.map((a) =>
  {return <a key={a} href= {'#'+ a}>{a}</a>})
  return (
  <nav>
    {link}
  </nav>)
}

export default NavBar;

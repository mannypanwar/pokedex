import React from "react";

export default function Header() {
  return (
    <nav className="navbar bg-light">
      <a className="navbar-brand" href="/">
        <img src="images/pokeball.png" alt="" loading="lazy" />
      </a>
      <span className="navbar-text">Pokedex</span>
    </nav>
  );
}

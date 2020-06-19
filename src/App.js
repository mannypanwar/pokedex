import React from "react";
import "./styles.css";
import Header from "../src/components/header";
import Search from "../src/components/search";

export default function App() {
  return (
    <div className="poke-container">
      <Header />
      <Search />
    </div>
  );
}

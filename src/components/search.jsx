import React, { useState } from "react";
import _ from "lodash";
import Card from "../components/card";

export default function Search(props) {
  const [poke, setPoke] = useState("bulbasaur");
  const [type, setType] = useState("");
  const [click, setClick] = useState(false);

  function handleChange(event) {
    setClick(false);
    let text = event.target.value;
    let something = _.lowerCase(text);
    setType(something);
  }
  function clicked(event) {
    async function getPokemon(name) {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      let data = await response.json();
      return data;
    }

    getPokemon(type).then(data => {
      setPoke(data);
      setClick(true);
    });

    event.preventDefault();
  }

  return (
    <>
      <section className="search">
        <form action="">
          <div className="something">
            <input
              className="form-control"
              placeholder="Pokemon name"
              onChange={handleChange}
            />
            <span className="input-group-btn">
              <button onClick={clicked} className="btn">
                <i className="fas fa-search " />
              </button>
            </span>
          </div>
        </form>
      </section>
      <Card name={poke} click={click} />
    </>
  );
}

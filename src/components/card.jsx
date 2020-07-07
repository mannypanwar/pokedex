import React from "react";
import { Controls, PlayState, Tween } from "react-gsap";

export default function Card(props) {
  return (
    // <Controls playState={PlayState.stop}>
    <Tween
      from={{
        opacity: 0,
        scale: 0.3,

        delay: 0.5,
      }}
      duration={1}
      ease="back"
    >
      <div
        className="poke-card"
        style={{ display: props.click ? "flex" : "none" }}
      >
        <img
          className="poke-img"
          src={`https://pokeres.bastionbot.org/images/pokemon/${props.name.id}.png`}
          alt=""
        />

        <div className="poke-text">
          <h1 className="text">{props.click && props.name.name}</h1>
          <h3 className="text">Ability :</h3>
          <h2 className="text">
            {props.click && props.name.abilities[0].ability.name}
          </h2>
          <h2 className="text">
            {props.click && props.name.abilities[1].ability.name}
          </h2>
        </div>
      </div>
    </Tween>
    // </Controls>
  );
}

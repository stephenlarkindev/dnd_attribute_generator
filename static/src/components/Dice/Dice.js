import React from "react";
import style from "./Dice.scss";

const dice = props => (
  <div className={style["dice"]}>
    <div>
      <i className={style["dice-" + props.diceVal]} />
    </div>
  </div>
);

export default dice;

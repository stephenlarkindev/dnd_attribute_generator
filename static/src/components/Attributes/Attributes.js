import React from "react";
import uniqid from "uniqid";
import Aux from "../../hoc/Aux/Aux";

import Attribute from "./Attribute/Attribute";
import Dice from "../Dice/Dice";

import styles from "./Attributes.scss";

const Attributes = props => {
  return (
    <Aux>
      {props.rolls.map(attr => (
        <div key={uniqid()} className={styles.diceContainer}>
          {attr.map(a => (
            <Dice key={uniqid()} diceVal={a} />
          ))}
          <p className={styles.total}>
            Total: {attr.reduce((a, b) => a + b, 0)}
          </p>
        </div>
      ))}
    </Aux>
  );
};

export default Attributes;

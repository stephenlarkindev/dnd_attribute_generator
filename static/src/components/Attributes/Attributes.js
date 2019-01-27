import React from "react";
import uniqid from "uniqid";
import Attribute from "./Attribute/Attribute";
import Dice from "../Dice/Dice";

class Attributes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rolls: []
    };
  }
  componentDidMount() {
    for (let i = 0; i < 6; i++) {
      let new_roll_value = this.state.rolls;
      new_roll_value.push(Attribute());
      this.setState({
        rolls: new_roll_value
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.rolls.map(attr => (
          <div key={uniqid()} className={["dice", "container"].join(" ")}>
            {attr.map(a => (
              <Dice key={uniqid()} diceVal={a} />
            ))}
            <p>Total: {attr.reduce((a, b) => a + b, 0)}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Attributes;

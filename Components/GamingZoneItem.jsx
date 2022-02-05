import { useState } from "react";

const upArrow = "./assets/upArrow.png";
const DownArrow = "./assets/DownArrow.png";

const GamingZoneItem = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="GameingZoneItem">
      <div className="playerPlaceholder">
        <img src={props.playerImg} className="playerImg" />
      </div>
      <div className="statesState">
        <div className="countPart">
          <span>{count}</span>
          <img
            src={upArrow}
            className="upArrowAction"
            onClick={() => setCount(count + 1)}
          />
          <img
            src={DownArrow}
            className="DownArrowAction"
            onClick={() => setCount(count - 1)}
          />
        </div>
        <h6 className="namePart">
          <span>{props.PlayerName}</span>
        </h6>
      </div>
    </div>
  );
};

export default GamingZoneItem;

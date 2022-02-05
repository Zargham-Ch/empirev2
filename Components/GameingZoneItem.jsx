const GamingZoneItem = (props) => {
  return (
    <div className="GameingZoneItem">
      <div className="playerPlaceholder">
        <img src={props.playerImg} className="playerImg" />
      </div>
      <div className="statesState">
        <div className="countPart"></div>
        <div className="namePart">{props.PlayerName}</div>
      </div>
    </div>
  );
};

export default GameingZoneItem;

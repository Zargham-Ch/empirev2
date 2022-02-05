import React from "react";
import GamingZoneItem from "./GamingZoneItem";
const playerOne = "./assets/playerOne.png";
const playerTwo = "./assets/playerTwo.png";

const GamingZone = () => {
  return (
    <div className="GamingZonePlay">
      <div className="container">
        <h1 className="headingMain">
          Minting <span> Game</span>
        </h1>
        <p className="dec-minting">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <div className="row GamingZoneItemRow">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <GamingZoneItem playerImg={playerOne} PlayerName="Buy with bnb" />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <GamingZoneItem playerImg={playerTwo} PlayerName="Buy with btc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamingZone;

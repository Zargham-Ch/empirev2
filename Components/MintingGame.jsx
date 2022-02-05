import FutureRoadMap from "./FutureRoadMap";

const gameGirl = "./assets/gameGirl.png";
const MintingGame = () => {
  return (
    <div className="MintingGame">
      <h1 className="headingMain">
        Minting <span>Game</span>
      </h1>
      <p className="decText">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident.
      </p>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img src={gameGirl} className="sideImage img-fluid" />
          </div>
          <div className="col-sm-12 col-lg-6">
            <h1 className="headingMain mt-c">
              All the Lorem is
              <span> generators</span>
            </h1>
            <p className="decText innerDec">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <a href="#" className="btnGetStarted">
              play for free
            </a>
          </div>
        </div>
      </div>
      <FutureRoadMap />
    </div>
  );
};

export default MintingGame;

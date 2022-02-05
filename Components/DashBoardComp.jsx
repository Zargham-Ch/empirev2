import React from "react";
const playerImg = "./assets/playerOne.png";

const DashBoardComp = () => {
  return (
    <div className="GamingZonePlay formPageWrapper dashboardWrapper">
      <div className="container">
        <h1 className="headingMain pt-10">
          <span>Dashbaord</span>
        </h1>
        <p className="dec mt-3">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <div className="rowWrapper pt-10">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="playerWrapper">
                <img src={playerImg} alt="imagename" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <h1 className="headingMain pt-5 innerHead">
                <span>William Smith</span>
              </h1>
              <h6 className="sub-head">Prototype Access</h6>
              <p className="num-sub">9999 xp</p>
              <p className="num-sub ex-mb">9999 vt</p>
              <a href="#" className="btnGetStarted Withdraw mt-4">
                Withdraw (btn)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardComp;

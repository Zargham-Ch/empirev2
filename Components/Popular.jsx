import ItemSlider from "./ItemSlider";

const p1 = "./assets/g1.png";
const p2 = "./assets/g2.png";
const p3 = "./assets/p3.png";
const a1 = "./assets/A2.png";
const a2 = "./assets/A3.png";
const a3 = "./assets/A4.png";
const a4 = "./assets/A5.png";

const Popular = () => {
  return (
    <div className="PopularWrapper">
      <ItemSlider />
      <h1 className="headingMain head">
        Contrary to popular <br /> <span> belief,</span>
      </h1>
      <div className="container">
        <div className="innerRow">
          <div className="row no-gutters">
            <div className="col-12 col-lg-6">
              <img src={p1} className="leftImage img-fluid" />
            </div>
            <div className="col-12 col-lg-6">
              <div className="textWrapper">
                <h1 className="headingMain innerHead">
                  There are many <br />
                  <span> variations</span>
                </h1>
                <p className="dec">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>
          </div>
          <div className="row no-gutter">
            <div className="col-12 col-lg-6 order-md-2 order-lg-1">
              <div className="textWrapper">
                <h1 className="headingMain innerHead">
                  All the Lorem is <br />
                  <span> generators</span>
                </h1>
                <p className="dec">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 order-md-1 order-lg-2">
              <img src={p2} className="leftImage img-fluid" />
            </div>
          </div>
          <div className="row no-gutter">
            <div className="col-12 col-lg-6 mt-md-0 mt-lg-5">
              <img src={p3} className="leftImage img-fluid" />
            </div>
            <div className="col-12 col-lg-6 mt-md-0 mt-lg-5">
              <div className="textWrapper">
                <h1 className="headingMain innerHead">
                  There are many <br />
                  <span> variations</span>
                </h1>
                <p className="dec">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={a1} className="tip p1Tip" />
      <img src={a2} className="tip p2Tip" />
      <img src={a3} className="tip p3Tip" />
      <img src={a4} className="tip  p4Tip" />
    </div>
  );
};

export default Popular;

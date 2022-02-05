const clip = "./assets/clip1.png";

const VariationsWidget = () => {
  return (
    <div className="variationsWidget">
      <div className="row no-gutters">
        <div className="col-sm-12 col-md-12 col-lg-4 px-0">
          <div className="variationItem">
            <img src={clip} className="clipImage" />
            <h6 className="headingMain clipText">
              There are many <span>variations</span>
            </h6>
            <p className="decText">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 px-0">
          <div className="variationItem">
            <img src={clip} className="clipImage" />
            <h6 className="headingMain clipText">
              There are many <span>variations</span>
            </h6>
            <p className="decText">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 px-0">
          <div className="variationItem">
            <img src={clip} className="clipImage" />
            <h6 className="headingMain clipText">
              There are many <span>variations</span>
            </h6>
            <p className="decText">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VariationsWidget;

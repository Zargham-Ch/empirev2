const sideImg = "./assets/A1.png";
const girl = "./assets/girlFirst.png";

const FirstFold = () => {
  return (
    <div className="firstFoldWrapper">
      <div className="container">
        <div className="row">
          <div className="offset-lg-4 col-sm-12 col-lg-8">
            <div className="firstWrapper">
              <h2 className="heading">
                The Future of in Sight,<span> The empire of sight</span>
              </h2>
              <p className="dec">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <a href="#" className="btnGetStarted btnRead">
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <img src={girl} className="GirlImage" />
      <img src={sideImg} className="ImageAside" /> */}
    </div>
  );
};

export default FirstFold;

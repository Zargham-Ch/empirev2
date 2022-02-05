import HeadingMain from "./HeadingMain";
const t1 = "./assets/t1.png";
const t2 = "./assets/t2.png";
const t3 = "./assets/t3.png";
const t4 = "./assets/t4.png";
const t5 = "./assets/t5.png";
const t6 = "./assets/t6.png";
const t7 = "./assets/t7.png";
const t8 = "./assets/t8.png";

const CryptomeriaAlliance = () => {
  return (
    <div className="CryptomeriaAlliance">
      <div className="container">
        <HeadingMain />
        <div className="row fR">
          <div className="col col-md-6 col-lg-3 bR">
            <img src={t1} alt="image" className="mt-3" />
          </div>
          <div className="col col-md-6 col-lg-3 bR b-sm-n-c">
            <img src={t2} alt="image" className="mt-3" />
          </div>
          <div className="col col-md-6 col-lg-3 bR">
            <img src={t3} alt="image" className="mt-3" />
          </div>
          <div className="col col-md-6 col-lg-3">
            <img src={t4} alt="image" />
          </div>
        </div>
        <div className="row sR">
          <div className="col col-md-6 col-lg-3 bR">
            <img src={t5} alt="image" className="mt-3" />
          </div>
          <div className="col col-md-6 col-lg-3 bR b-sm-n-c">
            <img src={t6} alt="image" className="mt-5" />
          </div>
          <div className="col col-md-6 col-lg-3 bR">
            <img src={t7} alt="image" className="mt-5" />
          </div>
          <div className="col col-md-6 col-lg-3">
            <img src={t8} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptomeriaAlliance;

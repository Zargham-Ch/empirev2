const facebook = "./assets/f1.png";
const discord = "./assets/discord.png";
const twitter = "./assets/f2.png";
const youtube = "./assets/f4.png";

const CopyRightFooter = () => {
  return (
    <div className="copyRightWrapper">
      <div className="left-policy">
        <a href="#" className="link">
          Terms & Conditions
        </a>
        <a href="#" className="link">
          Privacy Policy
        </a>
      </div>
      <div className="right-policy">
        <a href="#" className="link">
          <img src={discord} alt="facebook" className="" />
        </a>
        <a href="#" className="link">
          <img src={facebook} alt="facebook" className="fb" />
        </a>
        <a href="#" className="link">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#" className="link">
          <img src={youtube} alt="insta" />
        </a>
      </div>
    </div>
  );
};

export default CopyRightFooter;

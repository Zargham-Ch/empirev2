import classNames from "classnames";
import Link from "next/link";
const logo = "./assets/logo.png";

const Header = (props) => {
  const pathname = window.location.pathname;
  return (
    <div className={`headerWrapper ${props.classHeader}`}>
      <div className="container">
        <div className="flex-row">
          <div className="leftNav">
            <Link href="/minting" passHref>
              <a
                className={classNames("navLink", {
                  active: pathname.includes("minting"),
                })}
              >
                Minting
              </a>
            </Link>
            <Link href="/chatroom" passHref>
              <a
                className={classNames("navLink", {
                  active: pathname.includes("chatroom"),
                })}
              >
                Chatroom
              </a>
            </Link>
            <Link href="/whitepaper" passHref>
              <a
                className={classNames("navLink", {
                  active: pathname.includes("whitepaper"),
                })}
              >
                Whitepaper
              </a>
            </Link>
          </div>
          <h6 className="logo">
            <Link className="home-link" href="/" passHref>
              <img src={logo} alt="logo" />
            </Link>
          </h6>
          <div className="rightNav">
            <Link href="/lore" passHref>
              <a
                className={classNames("navLink", {
                  active: pathname.includes("lore"),
                })}
              >
                Lore
              </a>
            </Link>
            <Link href="/updates" passHref>
              <a
                className={classNames("navLink", {
                  active: pathname.includes("updates"),
                })}
              >
                Updates
              </a>
            </Link>
            <Link href="/faqs" passHref>
              <a
                className={classNames("navLink", {
                  active: pathname.includes("faqs"),
                })}
              >
                FAQS
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

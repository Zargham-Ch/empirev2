import Link from "next/link";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";
const logo = "./assets/logo.png";

const HeaderResponsive = (props) => {
  return (
    <Navbar
      variant="dark"
      expand={false}
      className={`responsiveWrapper ${props.classHeaderRes}`}
    >
      <Container>
        <Link className="home-link" href="/" passHref>
          <img src={logo} alt="logo" className="logo" />
        </Link>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <AiOutlineClose />
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link href="/minting" className="navLink">
                Minting
              </Link>
              <Link href="/whitepaper" className="navLink">
                Whitepaper
              </Link>
              <Link href="/lore" className="navLink">
                Lore
              </Link>
              <Link href="/updates" className="navLink">
                Updates
              </Link>
              <Link href="/faqs" className="navLink">
                FAQS
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default HeaderResponsive;

import logo from "../../assets/logo/logo-black.png";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import ProfilePic from "../profilePic/profilePic";

const Header = () => {
  const userName = localStorage.getItem("currentUser");
  const currentemail = localStorage.getItem("currentEmail");
  return (
    <Navbar className="justify-between bg-#f8f4ec h-24">
      <Container>
        <img
          src={logo}
          alt="Bloggingway Logo"
          className="w-32 pt-3 h-24 mr-5 mb-3.5"
          // style={{
          //   width: "120px",
          //   paddingTop: "13px",
          //   height: "100px",
          //   marginRight: "20px",
          //   marginBottom: "15px",
          // }}
        />

        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          {currentemail ? (
            <div className="mr-5 flex">
              <ProfilePic className="w-8 h-8" />
              <p className="mt-2.5 ml-3.5">{userName}</p>
            </div>
          ) : (
            <span className="mt-2">Welcome</span>
          )}
          <Nav.Link href="">coming soon</Nav.Link>
          <NavDropdown title="Account" id="collasible-nav-dropdown">
            <NavDropdown.Item href="">ComingSoon</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">coming soon</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            {currentemail ? (
              <NavDropdown.Item href="/login/">Logout</NavDropdown.Item>
            ) : (
              <NavDropdown.Item href="login/">Login</NavDropdown.Item>
            )}
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Header;

import logo from "../../assets/logo/logo-black.png";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import ProfilePic from "../profilePic/profilePic";

const Header = () => {
  const userName = localStorage.getItem("currentUser");
  const currentemail = localStorage.getItem("currentEmail");
  return (
    <Navbar
      className="justify-content-between"
      style={{ backgroundColor: "#f8f4ec", height: "90px" }}
    >
      <Container>
        <img
          src={logo}
          alt="Bloggingway Logo"
          style={{
            width: "120px",
            paddingTop: "13px",
            height: "100px",
            marginRight: "20px",
            marginBottom: "15px",
          }}
        />

        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="">soon</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          {currentemail ? (
            <div style={{ marginRight: "20px", display: "flex" }}>
              <ProfilePic style={{ width: "35px", height: "35px" }} />
              <p
                className="logged-prsn"
                style={{ marginTop: "10px", marginLeft: "15px" }}
              >
                {userName}
              </p>
            </div>
          ) : (
            <span className="welcome" style={{ marginTop: "7px" }}>
              Welcome
            </span>
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

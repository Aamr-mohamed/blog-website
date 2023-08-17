import logo from "../images/logo.png";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import  Navbar  from "react-bootstrap/Navbar";
import NavBar from "./SideBar";
import profile from "../images/profile-pic.jpg";


const Header = ()=>{
  const userName=localStorage.getItem("currentUser")

  return(
    
    <Navbar collapseOnSelect expand="lg" className="bg-body" style={{backgroundColor:"#f67280"}} >
      <NavBar/>
  <Container>
  <img src={logo} alt="Bloggingway Image" style={{width: "220px",
  paddingTop: "3px"}} />
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="">soon</Nav.Link>
    </Nav>
    <Nav className="ms-auto">
      <img src={profile} alt="Profile" class="rounded-circle" style={{width:"35px",height:"35px",marginTop:"3px",marginRight:"3px"}}/>
      <span className="logged-prsn" style={{marginTop:"7px"}}>{userName}</span>
      <Nav.Link href="">coming soon</Nav.Link>
      <NavDropdown title="Account" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          coming soon
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="login/">
          Logout
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
export default Header;

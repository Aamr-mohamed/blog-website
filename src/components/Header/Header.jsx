import logo from "../../assets/logo/logo-black.png";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import  Navbar  from "react-bootstrap/Navbar";
import SideBar from "../Sidebar/SideBar";
import SideBarNot from "../NotLoggedInSideBar/SideBarNot";
import ProfilePic from "../profilePic/profilePic";

const Header = ()=>{
  const userName=localStorage.getItem("currentUser")
  const currentemail=localStorage.getItem("currentEmail");
    return(
    <Navbar collapseOnSelect expand="lg" className="bg-body" style={{backgroundColor:"#f67280",height:"90px"}} >
      {
        currentemail ?
          <SideBar/>
          :
          <SideBarNot/>
      }
  <Container >
  <img src={logo} alt="Bloggingway Image" style={{width: "120px",
  paddingTop: "13px",height:"100px",marginRight:"20px",marginBottom:"15px"}} />
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="">soon</Nav.Link>
    </Nav>
    <Nav className="ms-auto">
      {
        currentemail ?
          
          <div style={{marginRight:"20px",display:"flex"}}>
            <ProfilePic style={{width:"35px",height:"35px"}}/>
            <p className="logged-prsn" style={{marginTop:"10px",marginLeft:"15px"}}>{userName}</p>
          </div>
          :
          <span className="welcome" style={{marginTop:"7px"}}>Welcome</span>
          
      }
      <Nav.Link href="">coming soon</Nav.Link>
      <NavDropdown title="Account" id="collasible-nav-dropdown">
        <NavDropdown.Item href="">ComingSoon</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">
          coming soon
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
        <NavDropdown.Divider />
        {
          currentemail ?
        <NavDropdown.Item href="/login/">
          Logout
        </NavDropdown.Item>
        :
        <NavDropdown.Item href="login/">
          Login
        </NavDropdown.Item>
        }
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}
export default Header;

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
    //logo
    // <div class="d-flex align-items-center justify-content-between">
    //   <a href="index.html" class="logo d-flex align-items-center">
    //     <img src="assets/img/logo.png" alt="">
    //     <span class="d-none d-lg-block">NiceAdmin</span>
    //   </a>
    //   <i class="bi bi-list toggle-sidebar-btn"></i>
    // </div>
    //profile image
    // <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
    //         <img src="assets/img/profile-img.jpg" alt="Profile" class="rounded-circle">
    //         <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
    //       </a>
;
/* <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
<div class="container-fluid">
  <img src={logo} alt="Bloggingway Image" style={{width: "220px",
  paddingTop: "3px"}} />
  
  <Button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </Button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/" style={{marginLeft:"10px"}}>Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login/">Login</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="signup/">Signup</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled">Admin (coming soon)</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="new-post/">create a new post</a>
      </li>
      <li class="nav-item" >
        <a class="nav-link" href="login/">logout</a>
      </li>
      
        <li className="nav-item dropdown pe-3 al" >

          <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
            <img src="" alt="Profile" class="rounded-circle"></img>
            <span class="d-none d-md-block dropdown-toggle ps-2">K. Anderson</span>
          </a>
        </li>
        <div className="mr-sm-2">
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                coming soon
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="login/">logout</NavDropdown.Item>
          </NavDropdown>
        </div>
    </ul>
  </div>
</div>
</Navbar> */
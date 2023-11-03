import React from "react";
import Header from "../components/Header/Header";
import SideBar from "../components/Sidebar/SideBar";
import { Col, Container, Row } from "react-bootstrap";

function Wrapper({ children }) {
  return (
    // <Container fluid>
    //   <Row>
    //     <Col lg={12}>
    //       <Header />
    //     </Col>
    //     <Col lg={2}>
    //       <SideBar />
    //     </Col>
    //     <Col lg={10}>{children}</Col>
    //   </Row>
    // </Container>
    <div className="h-screen grid grid-cols-4">
      <div className="col-span-4">
        <Header />
      </div>
      <div className="pl-8">
        <SideBar />
      </div>
      <div className="">{children}</div>
    </div>
  );
}

export default Wrapper;

import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import adPic from "../../assets/images/macAd.jpg";

function MacAds() {
  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img src={adPic} alt="Sample" />
      <CardBody>
        <CardTitle tag="h5">The Onion</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          @TheOnion
        </CardSubtitle>
        <CardText>
          McDonald’s Appealing To Health-Conscious Consumers With New ‘You Can’t
          Run From Us Forever’ Ad Campaign:
          <a href="https://trib.al/bDvWfTz">https://trib.al/bDvWfTz</a>
        </CardText>
      </CardBody>
    </Card>
  );
}

export default MacAds;

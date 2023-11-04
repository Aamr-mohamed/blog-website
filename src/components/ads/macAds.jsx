import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import adPic from "../../assets/images/macAd.jpg";

function MacAds(props) {
  return (
    <Card className="mt-6 w-96 bg-transparent " {...props}>
      <CardHeader>
        <img src={adPic} alt="Sample" />
      </CardHeader>
      <CardBody>
        <Typography color="gray">@TheOnion</Typography>
        <Typography color="blue-gray">
          McDonald’s Appealing To Health-Conscious Consumers With New ‘You Can’t
          Run From Us Forever’ Ad Campaign:
          <a href="https://trib.al/bDvWfTz" className="text-blue-400">
            https://trib.al/bDvWfTz
          </a>
        </Typography>
      </CardBody>
    </Card>
  );
}

export default MacAds;
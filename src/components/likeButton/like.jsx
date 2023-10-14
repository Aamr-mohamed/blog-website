import React, { useState } from "react";
import "./like.css";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { Row, Col, Container } from "react-bootstrap";
function Like() {
  const [like, setLike] = useState(0),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike ? -1 : 1));
      setIsLike(!isLike);
    };

  return (
    <>
      <Container>
        <Row>
          <Col xl="1">
            <p style={{}}>{like}</p>
          </Col>
          <Col xs="3">
            <AiFillLike
              className="likeBtn"
              size="2rem"
              onClick={onLikeButtonClick}
            />
          </Col>
          <Col xl="1">
            <p style={{}}>{like}</p>
          </Col>
          <Col xl="4">
            <AiFillDislike className="dislikeBtn" size="2rem" />
          </Col>
          <Col xl="3">
            <FaShare className="shareBtn" size="2rem" />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Like;

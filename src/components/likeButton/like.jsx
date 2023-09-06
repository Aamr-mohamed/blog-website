import React, { useState } from 'react'
import './like.css'
import {AiFillLike,AiFillDislike} from "react-icons/ai"
import {FaShare} from "react-icons/fa"
function Like() {
  const [like,setLike]=useState(0),
    [isLike,setIsLike]=useState(false),
    onLikeButtonClick=()=>{
      setLike(like+(isLike ? -1 :1));
      setIsLike(!isLike);
    }

  return (
    <>
        <div>
            <AiFillLike className="likeBtn" size="3rem" onClick={onLikeButtonClick} />
            <br/>
            <p>{like}</p>
            <AiFillDislike className="dislikeBtn" size="3rem" />
            <FaShare className="shareBtn" size="3rem" />
        </div>
    </>
  )
}
function player (name,age){
  this.name=name
  this.age=age
}
const amr=new player("amr",23)

export default Like;

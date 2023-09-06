import Header from "../../components/Header/Header";
import React from "react";
import { Alert } from 'reactstrap';
import Post from "../../components/posts/post";



// import "bootstrap/dist/css/bootstrap.min.css";


export default function Root() {
  const currentEmail = localStorage.getItem("currentEmail");
  const posts = JSON.parse(localStorage.getItem("Post"));
  const userPosts = posts
    .filter((post) => post.userEmail === currentEmail)
    .map((post, index) => (
      <Post
        postkey={index.toString()}
        key={index}
        postContent={post.post}
        title={post.Title} // Access Title from the post object
        createdAt={post.createdAt} // Access createdAt from the post object
      />
    ));
  return (
    <div style={{backgroundColor:"#E8E8E8" ,minHeight:"100%",position:"relative"}}>
      <div>
        <Header />
      </div>
      {userPosts}
    </div>
  );
}

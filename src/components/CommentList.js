import React from "react";
import Comment from "./Comment";
import { Alert } from 'react-bootstrap';

export default function CommentList(props) {
  console.log(props.comments)
  return (
    <div>
      {props.comments.length === 0 && !props.loading ? (
        <Alert variant="info">
          No comments yet. Be the first to comment.
        </Alert>
      ) : null}
      
      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} length={props.comments.length} />
      ))}
    </div>
  );
}

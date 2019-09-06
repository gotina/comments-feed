import React from "react";
import Moment from 'react-moment';
import { Card } from 'react-bootstrap';

export default function Comment(props) {
  const { name, message, time, id } = props.comment;

  return (
    <section className="mb-3" tabindex="0">
      <Card>
        <Card.Header>
          <span className="text-muted"><strong>{name}</strong></span>
          <span className="text-muted"><small> on <Moment>{time}</Moment></small></span>
          <span className="text-muted float-right"><small> {id} of {props.length}</small></span>
        </Card.Header>
        <Card.Body>{message}</Card.Body>
      </Card>
    </section>
  );
}

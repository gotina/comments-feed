import React, { Component } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import CommentList from "./components/CommentList";
import CommentForm from "./components/CommentForm";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      loading: false
    }
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch("")
      .then(res => res.json())
      .then(res => {
        this.setState({
          comments: res,
          loading: false
        });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }

  addComment(comment) {
    this.setState({
      loading: false,
      comments: [comment, ...this.state.comments]
    });
  }

  renderLoader() {
    return this.state.loading ? (
      <div>
        <Spinner animation="border" size="sm" variant="primary" role="status">
          <span className="sr-only">Loading comments...</span>
        </Spinner>
        <span>Loading comments...</span>
      </div>
    ) : null;
  }

  render() {

    return (
      <Container>
        <Row>
          <Col md={4} id="commentForm" aria-labelledby="Add a comment">
            <CommentForm addComment={this.addComment} />
          </Col>
          <Col md={8} id="commentList" aria-labelledby="Comments">
            {this.renderLoader()}
            <CommentList
              loading={this.state.loading}
              comments={this.state.comments}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

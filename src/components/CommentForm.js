import React, { Component } from "react";

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: "",

      comment: {
        name: "",
        message: ""
      }
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleFieldChange = event => {
    const { value, name } = event.target;

    this.setState({
      ...this.state,
      comment: {
        ...this.state.comment,
        [name]: value
      }
    });
  };

  onSubmit(e) {
    e.preventDefault();

    if (!this.isFormValid()) {
      this.setState({ error: "All fields are required." });
      return;
    }

    this.setState({ error: "" });

    let { comment } = this.state;

    fetch("", {
      method: "post",
      body: JSON.stringify(comment)
    })
      .then(response => response.json())
      .then(response => {
        if (response.error) {
          this.setState({ error: response.error });
        } else {
          comment.time = response.time;
          this.props.addComment(comment);

          this.setState({
            comment: { ...comment, message: "" }
          });
        }
      })
      .catch(err => {
        this.setState({
          error: "Something went wrong while submitting the form."
        });
      });
  }

  isFormValid() {
    return this.state.comment.name !== "" && this.state.comment.message !== "";
  }

  renderError() {
    return this.state.error ? (
      <div className="alert alert-danger">{this.state.error}</div>
    ) : null;
  }

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="nameInput">Name:</label>
            <input
              aria-label='Your Name'
              aria-required="true"
              id="nameInput"
              onChange={this.handleFieldChange}
              value={this.state.comment.name}
              className="form-control"
              name="name"
              type="text"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Your comments">Your Comment:</label>
            <textarea
              aria-label='Your Comment'
              aria-required="true"
              id="commentInput"
              onChange={this.handleFieldChange}
              value={this.state.comment.message}
              className="form-control"
              name="message"
              rows="5"
            />
          </div>

          {this.renderError()}

          <div className="form-group">
            <button disabled={this.state.loading} className="btn btn-primary">
             Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

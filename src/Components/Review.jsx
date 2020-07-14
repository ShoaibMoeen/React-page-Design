import React, { Component } from "react";

class Review extends Component {
  state = {
    img: this.props.img,
    review: this.props.review,
    name: this.props.name,
    desg: this.props.desg,
  };
  render() {
    return (
      <div className="review">
        <img src={this.state.img}></img>
        <div className="review-text">
          <span className="circle"></span>
          <span className="review-comment">"{this.state.review}"</span>
          <span className="reviewer-name">{this.state.name}</span>
          <span className="reviewer-designation">{this.state.desg}</span>
        </div>
      </div>
    );
  }
}

export default Review;

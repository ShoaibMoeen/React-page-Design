import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";

class ContentList extends Component {
  state = {
    img: this.props.img,
    header: this.props.head,
    d: this.props.desc,
  };
  render() {
    return (
      <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOut">
        <div className="content-item">
          <img src={this.state.img}></img>
          <div className="content-item-text">
            <p className="content-head">{this.state.header}</p>
            <p className="content-body">{this.state.d}</p>
          </div>
        </div>
      </ScrollAnimation>
    );
  }
}

export default ContentList;

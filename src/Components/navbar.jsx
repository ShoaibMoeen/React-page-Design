import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">Company</div>
        <ul>
          <li>Home</li>
          <li>Poducts</li>
          <li>About</li>
          <li>Customers</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <button className="navbar-demo-btn">Demo</button>

        <button className="navbar-login-btn">Login</button>
      </div>
    );
  }
}

export default NavBar;

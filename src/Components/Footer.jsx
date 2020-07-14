import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <span className="footer-logo">Company</span>
        <div className="footer-tab">
          <div className="footer-text">
            <div className="footer-text-items">
              <span className="footer-text-head">Company</span>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>News</li>
                <li>Trust</li>
              </ul>
            </div>
            <div className="footer-text-items">
              <span className="footer-text-head">Resources</span>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>News</li>
                <li>Trust</li>
              </ul>
            </div>
            <div className="footer-text-items">
              <span className="footer-text-head">Connect With Us</span>
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Partners</li>
                <li>News</li>
                <li>Trust</li>
              </ul>
            </div>
          </div>
          <div className="footer-info">
            Company contact info number etc here
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

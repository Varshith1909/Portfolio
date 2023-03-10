import React, { Component } from "react";
import "../styles/Navbar.css";
import logo from "./logo.jpg";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => this.setState({clicked: !this.state.clicked });
  render() {
    return (
    <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="navbar-text">
            <nav id="links" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <a href="/" className="active">
                    Home
                </a>
                <a href="/about">About</a>
                <a href="/skills">Skills</a>
                <a href="/works">Works</a>
                <a href="/contact">Contact</a>
            </nav>
        </div>
            <div id="mobile" onClick={this.handleClick}>
            <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
            </div>
        </div>
    );
  }
}

export default Navbar;

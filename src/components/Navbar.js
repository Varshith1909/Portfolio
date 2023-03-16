import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "./images/logo.jpg";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => this.setState({clicked: !this.state.clicked });
  render() {
    return (
    <div className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <div className="navbar-text">
            <nav id="links" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                <Link to="/*" className="nav-link" activeClassName="active">Home</Link>
                <Link to="/about" className="nav-link" activeClassName="active">About</Link>
                <Link to="/skills" className="nav-link" activeClassName="active">Skills</Link>
                <Link to="/works" className="nav-link" activeClassName="active">Works</Link>
                <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
            </nav>
        </div>
        <footer id="mobile" onClick={this.handleClick}>
            <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </footer>
    </div>
    );
  }
}

export default Navbar;

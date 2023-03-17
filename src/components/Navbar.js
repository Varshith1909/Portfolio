import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "./images/logo.jpg";

class Navbar extends Component {
        state = { clicked: false };
        handleClick = () => this.setState({clicked: !this.state.clicked });
        linkClick = () => { if(this.state.clicked) {
        this.setState({clicked: false});
    } 
}
    render() {
        return (
        <div className="navbar">
            <Link to='/'><img src={logo} alt="logo" className="logo" /></Link>
            <div className="navbar-text">
                <nav id="links" className={this.state.clicked ? "#navbar active" : "#navbar"}>
                    <Link to="/" className="nav-link" activeClassName="active" onClick={ this.linkClick }>Home</Link>
                    <Link to="/about" className="nav-link" activeClassName="active" onClick={ this.linkClick }>About</Link>
                    <Link to="/skills" className="nav-link" activeClassName="active" onClick={ this.linkClick }>Skills</Link>
                    <Link to="/project" className="nav-link" activeClassName="active" onClick={ this.linkClick }>Project</Link>
                    <Link to="/previousworks" className="nav-link" activeClassName="active" onClick={ this.linkClick }>Previous Works</Link>
                    <Link to="/contact" className="nav-link" activeClassName="active" onClick={ this.linkClick }>Contact</Link>
                </nav>
            </div>
            <div id="mobile" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </div>
    );
  }
}

export default Navbar;

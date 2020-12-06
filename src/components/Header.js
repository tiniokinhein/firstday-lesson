import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {

    const cssName = {
      wrapper: {
        background: '#000',
        color: '#fff'
      },
      header: {
        fontSize: '18px'
      }
    }

    return (
      <div className="container-fluid">
      <nav 
        className="navbar navbar-expand-lg navbar-light bg-light" 
        style={{
          ...cssName.wrapper,
          color: 'red',
          fontSize: '20px'
        }}
      >
        <Link className="navbar-brand" to="/" style={cssName.header}>
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/second">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Contact
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
      </div>
    );
  }
}

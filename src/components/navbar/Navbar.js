import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

import "../../asset/css/nav.css";

const Nav = ({ user }) => {
    const logOut = () => {
        AuthService.logout();
    };

    return (
        // <nav className="navbar navbar-expand navbar-dark bg-dark">
        <nav className="navbar">
        <Link to={"/"} className="navbar-brand">
          Page
        </Link>
        <div className="navbar-nav mr-auto">
          <ll className="nav-item">
            <i className="fas fa-bars"></i>
          </ll>

          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Overview
            </Link>
          </li>
        </div>

        {user ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                <i className="far fa-user-circle"></i>
                {user.username}
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/login"} className="nav-link" onClick={logOut}>
                Logout
              </Link>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link" >
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
    );
};

export default Nav;
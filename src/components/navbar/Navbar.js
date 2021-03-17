import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";

import { faBell, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import logo from "../../asset/img/logo.svg"

const Nav = ({ user }) => {
    const logOut = () => {
        AuthService.logout();
    };

    return (
        <div className="nav navbar navbar-light bg-light shadow col-lg-12 col-12 fixed-top">
          <div className="navbar-left">
            <div className="navbar-brand">
              <img src={logo} alt="logo"/>
              <a>LOGO</a>
            </div>
          </div>
          <div className="navbar-right" style={user ? {} : {display:"none"}}>
            <li className="nav-item">
            <a class="nav-link dropdown-toggle" href="#" id="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <FontAwesomeIcon icon={faBell} />
              <span>4</span>
            </a>
            </li>
            <li className="nav-item">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
          </div>
        </div>
    );
};

export default Nav;
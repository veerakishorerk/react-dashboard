import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./asset/css/style.css"

import AuthService from "./services/auth.service";

import Nav from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Profile from "./components/pages/Profile";

const App = () => {
  const [user, setUser] = useState(undefined);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user){
        setUser(user);
    }
  },[]);

  const openSidebar = () => { setSidebar(true); };
  const closeSidebar = () => { setSidebar(false); };

  return (
    <div className="wrapper">
        <Nav user={user}/>
        <div className="main">
          <Switch>
            <Route exact path={["/", "/login"]} component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
    </div>
  );
};

export default App;
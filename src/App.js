import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" exact component={Profile} />
      </switch>
    </BrowserRouter>
  );
};

export default App;

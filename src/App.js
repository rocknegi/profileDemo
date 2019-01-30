import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";

const App = () => {
  var arr = localStorage.getItem("myData");
  var data = JSON.parse(arr);
  var name = data.name.replace(/\s+/g, "");
  console.log(name);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path={"/" + name} exact component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

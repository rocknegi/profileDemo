import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        Home
        <NavLink to="/profile">
          <button>profile</button>
        </NavLink>
      </div>
    );
  }
}

export default Home;

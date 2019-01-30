import React, { Component } from "react";

class Profile extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    var arr = localStorage.getItem("myData");
    console.log(arr);
    var temp = JSON.parse(arr);
    this.setState({ data: temp });
    console.log(this.state.data);
  }
  render() {
    return <div>Profile of {this.state.data.name} </div>;
  }
}

export default Profile;

import React, { Component } from "react";

class Profile extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    var arr = localStorage.getItem("myData");
    // console.log(arr);
    var temp = JSON.parse(arr);
    this.setState({ data: temp });
    console.log(temp.fileSelected);
    const { handle } = this.props.match.params;
    console.log("yo", handle);
  }
  render() {
    return (
      <div>
        Profile of {this.state.data.name}
        <img src={this.state.data.fileSelected} />
      </div>
    );
  }
}

export default Profile;

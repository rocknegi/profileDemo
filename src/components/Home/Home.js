import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Home extends Component {
  state = {
    fileSelected: null,
    name: "",
    description: ""
  };
  fileChangedHalndler = event => {
    this.setState({ fileSelected: event.target.files[0] });
  };

  upload = () => {
    console.log(this.state.fileSelected);
  };

  submit = event => {
    event.preventDefault();
    localStorage.setItem("myData", JSON.stringify(this.state));
    // console.log(arr);
    // console.log(this.state);
    var route = this.state.name.replace(/\s+/g, "");
    this.props.history.push(`/${route}`);
  };
  change = (event, value) => {
    this.setState({ [value]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submit}>
        <TextField
          label="Name"
          id="std-name"
          margin="normal"
          onChange={event => this.change(event, "name")}
        />
        <TextField
          id="desc"
          label="Description"
          multiline
          rowsMax="5"
          margin="normal"
          onChange={event => this.change(event, "desc")}
        />
        <input type="file" onChange={this.fileChangedHalndler} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Home;

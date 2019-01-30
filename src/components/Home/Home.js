import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";

class Home extends Component {
  state = {
    fileSelected: null,
    name: "",
    description: ""
  };
  fileChangedHalndler = event => {
    var file = event.target.files[0];
    this.getBase64(file).then(base64 => {
      this.setState({ fileSelected: base64 });
    });
    console.log(this.state);
  };

  getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
      reader.readAsDataURL(file);
    });
  };
  upload = () => {
    console.log(this.state.fileSelected.name);
    console.log(this.state);
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
        <button onClick={this.upload}>Upload</button>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Home;

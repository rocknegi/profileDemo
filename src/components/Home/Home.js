import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  comp: {
    textAlign: "center",
    marginTop: "100px"
  }
};

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
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item sm={4} md={12} className={classes.comp}>
          <form onSubmit={this.submit} autocomplete="off">
            <TextField
              autoFocus
              label="Name"
              id="std-name"
              margin="normal"
              onChange={event => this.change(event, "name")}
            />
            <Grid item sm={4} md={12}>
              <TextField
                id="desc"
                label="Description"
                multiline
                rowsMax="5"
                onChange={event => this.change(event, "desc")}
              />
            </Grid>
            <Grid item sm={4} md={12}>
              <br />
              <Input
                color="primary"
                type="file"
                onChange={this.fileChangedHalndler}
              />
              <Button variant="contained" color="primary" onClick={this.upload}>
                Upload
              </Button>
            </Grid>
            <Grid item sm={4} md={12}>
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Home);

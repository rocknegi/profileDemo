import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    maxWidth: 250,
    margin: "20px auto 20px auto",
    maxHeight: 350,
    textAlign: "center"
  },
  cardMedia: {
    height: 250,
    width: 250
  },
  text: {
    margin: "20px auto 10px auto",
    textAlign: "center",
    fontSize: "20px"
  }
};
class Profile extends Component {
  state = {
    data: [],
    descEdit: false,
    imgEdit: false,
    fileSelected: null,
    name: "",
    description: ""
  };

  componentDidMount() {
    var arr = localStorage.getItem("myData");
    // console.log(arr);
    var temp = JSON.parse(arr);
    this.setState({ data: temp });
    this.setState({ name: temp.name });
    console.log(temp.fileSelected);
    const { handle } = this.props.match.params;
    console.log("yo", handle);
  }

  change = (event, value) => {
    this.setState({ [value]: event.target.value });
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

  save = event => {
    event.preventDefault();
    localStorage.setItem("myData", JSON.stringify(this.state));
    window.location.reload();
  };
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={4} sm={6} md={12} className={classes.text}>
          Profile of {this.state.name}
        </Grid>
        <Grid item xs={4} sm={6} md={12}>
          {this.state.imgEdit === false ? (
            <Card className={classes.card} raised={true}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image={this.state.data.fileSelected}
                  title="MyPic"
                />
              </CardActionArea>
              <Button
                variant="contained"
                color="primary"
                style={{ marginBottom: "10px" }}
                onClick={() => this.setState({ imgEdit: !this.state.imgEdit })}
              >
                Edit
              </Button>
            </Card>
          ) : (
            <div className={classes.text}>
              <Input
                color="primary"
                type="file"
                onChange={this.fileChangedHalndler}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => this.setState({ imgEdit: !this.state.imgEdit })}
              >
                cancel
              </Button>
            </div>
          )}
        </Grid>
        <Grid item className={classes.text}>
          {this.state.descEdit === false ? (
            <div>
              <Typography variant="h5">{this.state.data.desc}</Typography>

              <br />
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  this.setState({ descEdit: !this.state.descEdit })
                }
              >
                Edit
              </Button>
            </div>
          ) : (
            <div>
              <TextField
                id="desc"
                label="Description"
                multiline
                rowsMax="5"
                onChange={event => this.change(event, "desc")}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  this.setState({ descEdit: !this.state.descEdit })
                }
              >
                cancel
              </Button>
            </div>
          )}
        </Grid>
        <Grid item xs={12} sm={12} md={12} className={classes.text}>
          {this.state.descEdit || this.state.imgEdit ? (
            <Button variant="contained" color="primary" onClick={this.save}>
              Save Changes
            </Button>
          ) : null}
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Profile);

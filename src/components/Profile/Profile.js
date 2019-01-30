import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  card: {
    maxWidth: 250,
    margin: "20px auto 20px auto",
    maxHeight: 350
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
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={4} sm={6} md={12} className={classes.text}>
          Profile of {this.state.data.name}
        </Grid>
        <Grid item xs={4} sm={6} md={12}>
          <Card className={classes.card} raised={true}>
            <CardActionArea>
              <CardMedia
                className={classes.cardMedia}
                image={this.state.data.fileSelected}
                title="MyPic"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="h2"
                  align="center"
                >
                  <Button cont variant="contained" ained color="primary">
                    Edit
                  </Button>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item className={classes.text}>
          {this.state.data.desc} <br />
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Profile);

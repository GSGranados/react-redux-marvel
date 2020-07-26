import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Global Styles import
import { makeStyles } from "@material-ui/core/styles";
//AppBar imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
//Content Management
import { Grid } from "@material-ui/core";
import Router from "./components/Router/Router";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    pointerEvents: "cursor",
  },
  title: {
    flexGrow: 1,
    fontFamily: "'Bebas Neue', cursive",

  },
  option: {
    fontFamily: "'Bebas Neue', cursive",
    color: "white",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/*AppBar component call*/}
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" className={classes.title}>
            <Link to="/" style={{ textDecoration: "none" , color: "white" }}>
              Marvel App
            </Link>
          </Typography>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/GSGranados"
            style={{ textDecoration: "none" }}
          >
            <Button className={classes.option} color="inherit">
              GSGranados
            </Button>
          </a>
        </Toolbar>
      </AppBar>
      {/*AppBar component call*/}
      {/* Content with routes */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh" }}
        className="app-content"
      >
        <Router></Router>
      </Grid>
    </div>
  );
}

export default App;

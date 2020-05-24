import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Global Styles import
import { makeStyles } from "@material-ui/core/styles";
//AppBar imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
//Drawer imports
import clsx from "clsx";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//Content Management
import { Grid } from "@material-ui/core";
import Router from "./components/Router/Router";

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
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      {/*AppBar component call*/}
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            Marvel App
          </Typography>
          <Button className={classes.option} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      {/*AppBar component call*/}
      {/* Drawer Call*/}
      <SwipeableDrawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {list("left")}
      </SwipeableDrawer>
      {/* Drawer Call*/}
      {/* Content with routes */}
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: "100vh" }}
        className="app-content"
      >
        <Grid item xs={12}>
          <Router></Router>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

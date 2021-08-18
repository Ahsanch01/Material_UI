import React, { useState, useEffect } from "react";
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import logo from "../assests/Group1.png";
import Theme from "./ui/Theme";

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
const useStyle = makeStyles({
  root: {
    marginBottom: "0em",
    background: "grey",
  },
  logo: {
    height: "3em",
  },
  tabs: {
    marginLeft: "auto",
  },
  tab: {
    ...Theme.typography.tab,
    color: "white",

    minWidth: "5px",
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    backgroundColor: "orange",
  },
});

function Header({ value, setValue }) {
  const classes = useStyle();

  const handleChange = (e, value) => {
    setValue(value);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === "/about" && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === "/contact" && value !== 2) {
      setValue(2);
    }
  }, [value]);

  return (
    <ElevationScroll>
      <AppBar position="fixed">
        <Toolbar className={classes.root}>
          <Button component={Link} to="/" onClick={() => setValue(0)}>
            <img src={logo} alt="logo" className={classes.logo} />
          </Button>
          <Tabs value={value} className={classes.tabs} onChange={handleChange}>
            <Tab className={classes.tab} component={Link} to="/" label="Home">
              Home
            </Tab>
            <Tab
              className={classes.tab}
              component={Link}
              to="/about"
              label="About us"
            >
              About Us
            </Tab>
            <Tab
              className={classes.tab}
              component={Link}
              to="/contact"
              label="Contact us"
            >
              Contact Us
            </Tab>
          </Tabs>
          <Button variant="contained" className={classes.button}>
            Free Estimate
          </Button>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles({
  footer: {
    backgroundColor: "grey",
    width: "100%",
  },
  link: {
    color: "white",
    fontSize: "1rem",
  },
  itemContainer: {
    margin: "3em",
  },
});

function Footer({ value, setValue }) {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Hidden>
        <Grid container justifyContent="center">
          <Grid item className={classes.itemContainer}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(0)}
                component={Link}
                to="/"
              >
                HOme
              </Grid>
              <Grid item className={classes.link}>
                Categories
              </Grid>
              <Grid item className={classes.link}>
                Latest Product
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(1)}
                component={Link}
                to="/about"
              >
                About Us
              </Grid>
              <Grid item className={classes.link}>
                Team
              </Grid>
              <Grid item className={classes.link}>
                History
              </Grid>
            </Grid>
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Grid container direction="column" spacing={2}>
              <Grid
                item
                className={classes.link}
                onClick={() => setValue(2)}
                component={Link}
                to="/contact"
              >
                Contact Us
              </Grid>
              <Grid item className={classes.link}>
                Contact Us
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
    </footer>
  );
}

export default Footer;

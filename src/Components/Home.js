import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import A from "../assests/a.jpeg";
import { height } from "@material-ui/system";

const useStyles = makeStyles({
  home: {
    margin: "5rem",
  },
  btn: {
    borderRadius: "50px",
    background: "grey",
    color: "white",
  },
  bgimg: {
    backgroundImage: `url(${A})`,

    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "30",
    position: "absolute",
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      {" "}
      <Grid container direction="column">
        <Grid item style={{ backgroundColor: "pink" }}>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
              Website LOGO
              <Grid container spacing={3} justifyContent="center">
                <Grid item>
                  <Button variant="contained" className={classes.btn}>
                    Welcome
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" className={classes.btn} container>
                    Broh
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>Serach Button</Grid>
          </Grid>
        </Grid>
        <Grid item style={{ marginTop: "2rem" }}>
          <Grid container direction="row">
            <Grid
              item
              style={{
                minWidth: "80%",
                maxWidth: "60%",
                backgroundColor: "yellow",
              }}
            >
              <Typography variant="h2">All products Listed</Typography>
              <Typography> here is the All products of store</Typography>
              <Button variant="contained"> Click here</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container justifyContent="flex-end">
            <Grid
              item
              style={{
                minWidth: "40%",
                maxWidth: "40%",
                backgroundColor: "red",
              }}
            >
              <Typography
                variant="h2"
                style={{
                  margin: "2em",
                  backgroundColor: "yellow",
                  fontSize: "2em",
                }}
              >
                Latest Products
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            justifyContent="center"
            style={{ backgroundColor: "red", padding: "20px" }}
          >
            <Grid item>
              <Card style={{ backgroundColor: "yellow" }}>
                <Grid
                  container
                  direction="column"
                  alignItems="center"
                  spacing={3}
                >
                  <Grid item>
                    <Typography variant="h2">
                      This is the practice card
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained">Click Here</Button>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Grid container direction="column">
                <Typography variant="h4">About us</Typography>
                <Typography variant="Subtitle1">Learn about personl</Typography>
                <Button variant="contained">About us</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

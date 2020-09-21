import { Grid, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import styles from './styles';
// import Header from './header/index'
import Sidebar from "./Sidebar/drawer/index";
import Drawer from "./Sidebar/drawer/index";
import Appbar from "./Sidebar/appbar";
class Dashboard extends Component {
  render() {
    const { children,name,classes } = this.props;
    return (
      <div>
        {/* <Header name={name}name={name}/> */}
        <Grid container spacing={3}>
          <Grid item xs={2}>
          <Drawer/>
          </Grid>
          <Grid item xs={10}>
          <Grid item xs={12}>
          <Appbar/>
            </Grid>
          <Grid item xs ={12}>
          <div className={classes.pad}>
          {children}
          </div>
          </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);

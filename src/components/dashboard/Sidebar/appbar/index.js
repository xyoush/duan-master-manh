import { withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Toolbar from "@material-ui/core/Toolbar";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { Component } from "react";
import styles from "./styles";

const theme = styles;
class appbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
  }
  handleDrawerOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleDrawerClose = () => {
    this.setState({
      open: null,
    });
  };

  render() {
    const { classes, name } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.root}>
       <AppBar
          position="absolute"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <div className={clsx(classes.editbutton)}>
            </div>
            {/* <Typography variant="h6" noWrap>
              {name}
            </Typography> */}
            {/* Tìm kiếm */}
            <div className={clsx(classes.editsearch)}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Tìm kiếm"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </div>
         
            <IconButton aria-label="show 17 new notifications" color="inherit">
              {/* <Badge badgeContent={17} color="secondary"></Badge> */}
              <NotificationsIcon />
            </IconButton>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <ExitToAppIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

appbar.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(appbar);

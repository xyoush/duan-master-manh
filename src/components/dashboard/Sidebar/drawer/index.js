import { Avatar, withStyles } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import { Assignment } from "@material-ui/icons";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import WorkIcon from "@material-ui/icons/Work";
import clsx from "clsx";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTES } from "../../../../constants";
import styles from "./styles";

const theme = styles;
class Sidebar extends Component {
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
      <div >
        
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          
          <div className={classes.appBar}>
            <div className={classes.khungapp}>
              <div className={classes.stylesapp}>
                <div className={classes.Iconbutton}>
                  <div className={clsx(classes.images)}>
                    {/* <img
                src="https://i.imgur.com/dHDXRY2.png"
                alt=""
                width="150px"
              ></img> */}
                    {/* ảnh dài */}
                    <IconButton onClick={this.handleDrawerClose} className={open=== null ? classes.none : ''}>
                      {theme.direction === "rtl" ? (
                        <img
                          src="https://i.imgur.com/dHDXRY2.png"
                          alt=""
                          width="170px"
                        ></img>
                      ) : (
                        <img
                          src="https://i.imgur.com/dHDXRY2.png"
                          alt=""
                          width="170px"
                        ></img>
                      )}
                    </IconButton>
                    <IconButton
                color="secondary"
                onClick={this.handleDrawerOpen}
                edge="start"
                className={clsx(classes.menuButton, {
                  [classes.hide]: open,
                })}
              >
                <div className={clsx(classes.imageslogo)}>
                  <div className={clsx(classes.images)}>
                    {/* ảnh tròn */}
                    <img
                      src="https://i.imgur.com/FUHxq7B.png"
                      alt=""
                      width="35px"
                    ></img>
                  </div>
                </div>
              </IconButton>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <Avatar
            alt="Nguyễn Thị Thái Hà"
            src="https://i.imgur.com/up7EERp.jpg"
            className={open === true ? classes.large : classes.none}
          />
          <p className={open === true ? classes.nameuser : classes.none}>
            Nguyễn Thị Thái Hà
          </p>
          <p className={open === true ? classes.namework : classes.none}>
            Ô sin
          </p>
          <Divider />
          <List className={classes.List}>
            {ADMIN_ROUTES.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  exact={item.exact}
                  className={classes.menuLink}
                  activeClassName={classes.menuLinkActive}
                  key={item.path}
                >
                  <ListItem button key={item} className={classes.listItem}>
                    <ListItemIcon className={classes.listIcon}>
                      {index === 0 && <WorkIcon color="primary" />}
                      {index === 1 && <AssignmentIndIcon color="primary" />}
                      {index === 2 && <Assignment color="primary" />}
                      <ListItemText
                        primary={item.name}
                        className={classes.text}
                      />
                    </ListItemIcon>
                  </ListItem>
                </NavLink>
              );
            })}
          </List>
          <Divider />
          <List>
            {["Cài Đặt"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 1 === 0 ? <SettingsIcon color="primary" /> : null}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(Sidebar);

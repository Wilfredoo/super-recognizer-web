import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    flex: 1,
    justifyContent: "flex-end",
    marginRight: 16,
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1,
      fontSize: 12,
    },
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-end",
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = (pageURL) => {
    history.push(pageURL);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "Games",
      pageURL: "/games",
    },
    {
      menuTitle: "Feedback",
      pageURL: "/feedback",
    },
    {
      menuTitle: "Research",
      pageURL: "/research",
    },
    {
      menuTitle: "Give me 5$",
      pageURL: "/sponsors",
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#0278ae" }}>
        <Toolbar>
          <Link to="/">
          <Button color="inherit">
            <div className="superDiv">
              <img className="super" src="/super.png" />
            </div>
          </Button>
          </Link>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <div className={classes.headerOptions}>
              <Button color="inherit" onClick={() => handleButtonClick("/")}>
                Home
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick("/games")}
              >
                Games
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick("/research")}
              >
                Research
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick("/feedback")}
              >
                Feedback
              </Button>
              <Button
                color="inherit"
                onClick={() => handleButtonClick("/sponsors")}
              >
                Give me 5$
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);

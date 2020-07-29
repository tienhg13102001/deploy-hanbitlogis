import React from "react";
import { withStyles, styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { NavLink } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    width: "100%",
    border: "1px solid #d3d4d5",
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const MyButton = styled(Button)({
  width: "100%",
  fontSize: "16px",
  background: "#da2320",
  border: 0 ,
  borderRadius: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: "#da2320",
  },
});

const StyledMenuItem = withStyles((theme) => ({
  root: {
    width: "100%",
    color: "#333333",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 300px",
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [menuText, setMenuText] = React.useState("당사차량");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOnClick = (text) => {
    setMenuText(text);
    setAnchorEl(null);
  };

  return (
    <div className="DropDown_container">
      <MyButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        {menuText}
        <KeyboardArrowDownIcon />
      </MyButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <NavLink className="Mobile_link" to="/Vehicle/onevehicle">
          <StyledMenuItem onClick={() => menuOnClick("당사차량[1톤]")}>
            <ListItemText primary="당사차량[1톤]" />
          </StyledMenuItem>
        </NavLink>
        <NavLink className="Mobile_link" to="/Vehicle/twovehicle">
          <StyledMenuItem onClick={() => menuOnClick("당사차량[2.5톤]")}>
            <ListItemText primary="당사차량[2.5톤]" />
          </StyledMenuItem>
        </NavLink>
        <NavLink className="Mobile_link" to="/Vehicle/threevehicle">
          <StyledMenuItem onClick={() => menuOnClick("당사차량[4.5톤]")}>
            <ListItemText primary="당사차량[4.5톤]" />
          </StyledMenuItem>
        </NavLink>
        <NavLink className="Mobile_link" to="/Vehicle/fourvehicle">
          <StyledMenuItem onClick={() => menuOnClick("당사차량[5톤]")}>
            <ListItemText primary="당사차량[5톤]" />
          </StyledMenuItem>
        </NavLink>
      </StyledMenu>
    </div>
  );
}

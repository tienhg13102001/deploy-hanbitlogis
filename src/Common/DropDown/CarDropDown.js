import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { NavLink } from "react-router-dom";

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        
        당사차량

      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <NavLink to="/Vehicle/onevehicle">
          <ListItemText primary="당사차량[1톤]" />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <NavLink to="/Vehicle/twovehicle">
          <ListItemText primary="당사차량[2.5톤]" />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <NavLink to="/Vehicle/threevehicle">
          <ListItemText primary="당사차량[4.5톤]" />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
          </ListItemIcon>
          <NavLink to="/Vehicle/fourvehicle">
          <ListItemText primary="당사차량[5톤]" />
          </NavLink>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}

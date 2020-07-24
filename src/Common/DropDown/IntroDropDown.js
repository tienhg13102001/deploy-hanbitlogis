import React from 'react';
import { withStyles, styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from "react-router-dom";
import './DropDown.scss'

const StyledMenu = withStyles({
  paper: {
    width:'100%',
    border: '1px solid #d3d4d5',
    maxWidth: "100%"
  },

})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: "center",
    }}
    {...props}
  />
));

const MyButton = styled(Button)({
  width:'100%',
  fontSize:'16px',
  background: '#da2320',
  border: 0,
  borderRadius: 3,
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    backgroundColor: "#da2320",
  },
});


const StyledMenuItem = withStyles((theme) => ({
  root: {
    width:"100%",
    color:'#333333',
    justifyContent:'center',
    '&:focus': {
      width:'100%',
      backgroundColor: "#da2320",
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: '#fff'
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
    <div className="DropDown_container">
      <MyButton 
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        
        회사 소개

      </MyButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <NavLink className="Mobile_link" to="/Intro/Policy">
          <ListItemText primary="경영 방침" />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <NavLink className="Mobile_link" to="/Intro/history">
          <ListItemText primary="회사 연혁" />
          </NavLink>
        </StyledMenuItem>
        <StyledMenuItem>
          <NavLink className="Mobile_link" to="/Intro/come">
          <ListItemText primary="오시는길" />
          </NavLink>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}



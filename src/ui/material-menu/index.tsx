import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { grey } from "@mui/material/colors";
import { useLogin } from "../../hooks";
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {
  const { loggedIn, handleLogin } = useLogin();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ fontSize: 60, color: grey["A100"] }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            if (loggedIn) {
              navigate("/my-profile");
            } else {
              navigate("/login");
            }
          }}
        >
          Mi perfil
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (loggedIn) {
              console.log("estoy logueado");
            } else {
              console.log("no estoy logueado");
            }
          }}
        >
          Mis mascotas reportadas
        </MenuItem>
        <MenuItem
          onClick={() => {
            if (loggedIn) {
              console.log("estoy logueado");
            } else {
              console.log("no estoy logueado");
            }
          }}
        >
          {loggedIn ? "Cerrar Sesion" : "Inicia Sesion"}
        </MenuItem>
      </Menu>
    </div>
  );
}

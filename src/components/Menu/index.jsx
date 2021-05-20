import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Menu = () => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <MenuItem onClick={() => sendTo("/")}>Login</MenuItem>
        <MenuItem onClick={() => sendTo("/register")}>Resgister</MenuItem>
        <MenuItem onClick={() => sendTo("/home")}>Home</MenuItem>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;

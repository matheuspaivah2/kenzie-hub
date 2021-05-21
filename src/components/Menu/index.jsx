import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Menu = ({isValidated, setIsValidated}) => {
  const history = useHistory();

  const sendTo = (path) => {
    history.push(path);
  };

  const Logout = () =>{
    localStorage.clear();
    setIsValidated(false)
    sendTo("/login")
  }

  return (
    <AppBar position="static">
      <Toolbar>
        {
          isValidated ?
          <>
            <MenuItem onClick={() => sendTo("/home")}>Home</MenuItem>
            <MenuItem onClick={Logout}>Logout</MenuItem>
          </>
          :
          <>
            <MenuItem onClick={() => sendTo("/")}>Login</MenuItem>
            <MenuItem onClick={() => sendTo("/register")}>Resgister</MenuItem>
          </>
        }
        
        
      </Toolbar>
    </AppBar>
  );
};

export default Menu;

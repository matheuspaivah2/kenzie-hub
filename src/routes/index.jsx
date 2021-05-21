
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Singup from "../pages/Singup";
import NotFound from '../pages/NotFound'

const Routes = ({isValidated, setIsValidated}) => {

  
  
  return (
    <Switch>
      <Route exact path="/">
        <Login setIsValidated={setIsValidated} />
      </Route>
      <Route path="/login">
        <Login setIsValidated={setIsValidated} />
      </Route>
      <Route path="/register">
        <Singup />
      </Route>
      <Route path="/home">
        {
          isValidated ?
            <Home isValidated={isValidated} />
          :
            <Login setIsValidated={setIsValidated} />   
        }
        
      </Route>
      <Route>
        <NotFound/>
      </Route>
    </Switch>
  );
};

export default Routes;

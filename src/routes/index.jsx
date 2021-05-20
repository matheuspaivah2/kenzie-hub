import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Singup from "../pages/Singup";

const Routes = () => {

  const [isValidated, setIsValidated] = useState(false);
  
  return (
    <Switch>
      <Route exact path="/">
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
    </Switch>
  );
};

export default Routes;

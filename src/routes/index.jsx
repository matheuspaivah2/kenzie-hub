import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Singup from "../pages/Singup";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/register">
        <Singup />
      </Route>
      <Route path="/home">
        <Home />
      </Route>
    </Switch>
  );
};

export default Routes;

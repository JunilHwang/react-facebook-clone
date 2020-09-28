import React from 'react';
import {Home, SignIn, SignUp} from "./pages";
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup " component={SignUp} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
};

export default App;

import React from 'react';
import {Home, SignIn, SignUp} from "./pages";
import {BrowserRouter, Redirect, Switch} from 'react-router-dom';
import {DefaultLayout, PublicLayout} from "./layouts";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout path="/" component={Home}/>
        <PublicLayout path="/login" component={<SignIn className="login" title="로그인" />}/>
        <PublicLayout path="/signup" component={<SignUp className="signup" title="계정 만들기" />}/>
        <Redirect path="*" to="/"/>
      </Switch>
    </BrowserRouter>
  )
};

export default App;

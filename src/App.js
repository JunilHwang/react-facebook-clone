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
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕', malgun gothic, '돋움', Dotum, sans-serif;
          color: #202b3d;
          background-color: #e9eaed;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }
        body {
          padding: 100px 0;
        }
        .container {
          max-width: 600px;
        }
      `}</style>
    </BrowserRouter>
  )
};

export default App;

import React, { useState } from 'react';
import { Home, SignIn, SignUp } from './pages';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';

const App = () => {
  const [user, setUser] = useState({
    seq: 0,
    name: 'harry',
    profileImageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
  });
  const [posts, setPosts] = useState([
    {
      seq: 1,
      writer: { ...user },
      contents: '',
      createAt: new Date(),
      likes: 0,
      comments: 0,
      likesOfMe: false,
      commentList: [],
    },
  ]);

  const HomeComponent = () => <Home posts={posts} setPosts={setPosts} />;

  return (
    <BrowserRouter>
      <Switch>
        <PublicLayout path="/login" component={SignIn} />
        <PublicLayout path="/signup" component={SignUp} />
        <DefaultLayout path="/" user={user} component={HomeComponent} />
        <Redirect path="*" to="/" />
      </Switch>
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕', malgun gothic,
            '돋움', Dotum, sans-serif;
          color: #202b3d;
          background-color: #e9eaed;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }
        body {
          padding: 100px 0;
        }
      `}</style>
    </BrowserRouter>
  );
};

export default App;

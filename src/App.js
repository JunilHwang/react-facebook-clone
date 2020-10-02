import React, { useState } from 'react';
import { Home, SignIn, SignUp } from './pages';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import { PostService } from './services';
import css from 'styled-jsx/css';

const App = () => {
  const [user, setUser] = useState({
    seq: 1,
    name: 'harry',
    profileImageUrl:
      'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
  });

  const [posts, setPosts] = useState(PostService.fetchPosts());

  const loadPost = () => setPosts(PostService.fetchPosts());

  const addPost = (contents) => {
    PostService.savePost({ contents, writer: user });
    loadPost();
  };

  const addComment = (post, contents) => {
    PostService.addComment(post, { contents, writer: user });
    loadPost();
  };

  const addLike = (post) => {
    PostService.addLike(post);
    loadPost();
  };

  const HomeComponent = () => (
    <Home posts={posts} addPost={addPost} addComment={addComment} user={user} addLike={addLike} />
  );

  console.log('App');

  return (
    <BrowserRouter>
      <Switch>
        <PublicLayout path="/login" component={SignIn} />
        <PublicLayout path="/signup" component={SignUp} />
        <DefaultLayout path="/" user={user} component={HomeComponent} />
        <Redirect path="*" to="/" />
      </Switch>
      <style jsx global>
        {commonStyle}
      </style>
    </BrowserRouter>
  );
};

const commonStyle = css`
  * {
    box-sizing: border-box;
  }
  html,
  body {
    font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕', malgun gothic, '돋움',
      Dotum, sans-serif;
    color: #202b3d;
    background-color: #e9eaed;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.5;
  }
  body {
    padding: 100px 0;
  }
`;

export default App;

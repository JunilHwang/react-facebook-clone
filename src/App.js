import React from 'react';
import { Home, SignIn, SignUp } from './pages';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import { useAuth, usePosts } from './hooks';

const App = () => {
  const { user } = useAuth();
  const { posts, addPost: handleAddPost, addComment: handleAddComment, toggleLike: handleToggleLike } = usePosts();

  const HomeComponent = () => (
    <Home posts={posts} onAddPost={handleAddPost} onAddComment={handleAddComment} onToggleLike={handleToggleLike} />
  );

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

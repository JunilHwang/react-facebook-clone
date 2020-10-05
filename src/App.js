import React from 'react';
import { Home, SignIn, SignUp } from './pages';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { DefaultLayout, PublicLayout } from './layouts';
import { useAuth, usePosts } from './hooks';

const App = () => {
  const { user, signIn: handleSignIn, signUp: handleSignUp, removeAuth: handleRemoveAuth } = useAuth();
  const {
    posts,
    addPost: handleAddPost,
    addComment: handleAddComment,
    toggleLike: handleToggleLike,
    handleFormSubmit,
  } = usePosts(user);

  const SignInComponent = React.memo(() => <SignIn onSignIn={handleSignIn} />);

  const SignUpComponent = React.memo(() => <SignUp onSignUp={handleSignUp} />);

  const HomeComponent = React.memo(() => (
    <Home
      posts={posts}
      onAddPost={handleAddPost}
      onAddComment={handleAddComment}
      onToggleLike={handleToggleLike}
      onFormSubmit={handleFormSubmit}
    />
  ));

  return (
    <BrowserRouter>
      <Switch>
        <PublicLayout path="/login" component={SignInComponent} />
        <PublicLayout path="/signup" component={SignUpComponent} />
        <DefaultLayout path="/" component={HomeComponent} user={user} onRemoveAuth={handleRemoveAuth} />
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

import React, { Component } from 'react';
import Home from './pages/Home';
import { BrowserRouter, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import PublicLayout from './layouts/PublicLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

class App extends Component {
  state = {
    user: {
      name: 'harry',
      profileImageUrl:
        'https://s3.ap-northeast-2.amazonaws.com/grepp-cloudfront/programmers_imgs/learn/course9872/instructor_harry.png',
    },
    posts: [],
  };

  handleLogOut = () => this.setState({ user: undefined });

  handleAddComment = (postSeq, contents) => {
    const newPosts = [...this.state.posts];
    const idx = newPosts.findIndex((v) => v.seq === postSeq);
    const post = newPosts[idx];
    post.commentList = [
      {
        seq: post.commentList.length,
        createAt: new Date(),
        writer: this.state.user,
        contents,
      },
      ...post.commentList,
    ];
    this.setState({
      posts: newPosts,
    });
  };

  handleAddPost = (contents) => {
    this.setState({
      posts: [
        {
          seq: this.state.posts.length,
          writer: this.state.user,
          contents,
          createAt: new Date(),
          likes: 0,
          comments: 0,
          likesOfMe: false,
          commentList: [],
        },
        ...this.state.posts,
      ],
    });
  };

  handleLikePost = (postSeq) => {
    const newPosts = this.state.posts.splice(0);
    const idx = newPosts.findIndex((v) => v.seq === postSeq);
    const post = newPosts[idx];
    if (post.likesOfMe === false) post.likes += 1;
    post.likesOfMe = true;
    this.setState({
      posts: newPosts,
    });
  };

  render() {
    const { posts, user } = this.state;
    return (
      <>
        <BrowserRouter>
          <Switch>
            <PublicLayout path="/login" component={Login} />
            <PublicLayout path="/signup" component={SignUp} />
            <DefaultLayout
              path="/"
              posts={posts}
              logOut={this.handleLogOut}
              user={user}
              onCommentSubmit={this.handleAddComment}
              onPostSubmit={this.handleAddPost}
              onLikeClicked={this.handleLikePost}
              component={Home}
            />
          </Switch>
        </BrowserRouter>
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
      </>
    );
  }
}
export default App;

import React from 'react';
import css from 'styled-jsx/css';
import { PostForm, Post } from '../components';

const Home = ({ posts, onAddPost, onAddComment, onToggleLike, onFormSubmit }) => {
  return (
    <div className="posts container">
      <PostForm onAddPost={onAddPost} onFormSubmit={onFormSubmit} />
      {posts.map((post) => (
        <Post
          key={post.seq}
          post={post}
          onAddComment={onAddComment}
          onToggleLike={onToggleLike}
          onFormSubmit={onFormSubmit}
        />
      ))}
      <style jsx>{HomeStyle}</style>
    </div>
  );
};

const HomeStyle = css`
  .container {
    max-width: 600px;
  }

  .comment-form {
    margin: 20px;
  }

  .comment-form > textarea.form-control {
    min-height: 20px;
    line-height: 20px;
    border-radius: 0.5rem;
    resize: none;
  }

  .comment-form > button.btn {
    float: right;
    margin-bottom: 0;
    margin-top: 16px;
    background-color: #3b5999;
    color: #fffffe;
    border-color: unset;
    font-weight: 800;
  }
`;

export default Home;

import React, { useCallback } from 'react';
import css from 'styled-jsx/css';
import Comments from './Comments';
import CommentForm from './CommentForm';
import { timeToString } from '../../utils';

const Card = ({ post, user, addComment, addLike }) => {
  const { seq, writer, contents, createAt, likes, comments, likesOfMe, commentList } = post;

  const addCommentOfPost = (contents) => addComment(post, contents);

  const handleLikeClick = useCallback((event) => {
    event.preventDefault();
    addLike(post);
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{writer.name}</h5>
        <h6 className="card-subtitle text-muted">{timeToString(createAt)}</h6>
        <p className="card-text">{contents}</p>
        <hr />
        <div className="card-info">
          <button type="button" className="thumb-count" onClick={handleLikeClick}>
            <i className={`far fa-thumbs-up ${likesOfMe ? 'on' : ''}`}>{likes} 개</i>
          </button>
          <span className="comment-count">
            <i className="far fa-comment-alt">{comments} 개</i>
          </span>
        </div>
      </div>
      <Comments commentList={commentList} />
      <CommentForm addCommentOfPost={addCommentOfPost} />
      <style jsx>{cardStyle}</style>
    </div>
  );
};

const cardStyle = css`
  .card {
    padding: 0;
    margin-top: 50px;
    border: none;
    border-radius: 0.5rem;
  }

  .card .card-body {
    padding: 40px;
  }

  .card .card-text {
    padding-top: 20px;
    white-space: pre-wrap;
  }

  .card .card-info {
    height: 20px;
  }

  .card .card-info .thumb-count,
  .card .card-info .comment-count {
    display: inline-block;
    margin-right: 24px;
    vertical-align: middle;
    font-size: 12px;
    cursor: pointer;
    padding: 0;
    border: none;
    background-color: transparent;
    transition: color ease-in-out 0.3s;
    transition: margin-top ease-in-out 0.2s;
  }

  .card .card-info .thumb-count:hover,
  .card .card-info .comment-count:hover {
    color: #007bff;
    margin-top: -3px;
  }

  .card .card-info .thumb-count .on {
    color: #007bff;
  }
`;

export default React.memo(Card);

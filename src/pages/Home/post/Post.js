import React, { useEffect } from 'react';
import css from 'styled-jsx/css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CommentForm, Comments } from '../comment';
import { fromNow } from '@/utils';
import * as actions from '@/data/rootActions';
import * as selectors from '@/data/rootSelectors';

const defaultProfileImageURL = 'https://slcp.lk/wp-content/uploads/2020/02/no-profile-photo.png';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const {
    seq: postId,
    createAt,
    writer: { name, userId, profileImageUrl = defaultProfileImageURL },
    contents,
    likes,
    likesOfMe,
  } = post;

  useEffect(() => {
    dispatch(actions.comments.getComments({ userId, postId }));
  }, [userId, postId]);

  const commentsCount = useSelector(selectors.comments.getCommentsCount(postId));
  const handleLikeClock = (e) => {
    e.preventDefault();
    dispatch(actions.posts.likePost(postId));
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <Link className={profileStyle.className} to={`/u/${userId}`}>
            <img className="profile-image" src={profileImageUrl} alt={userId} width={25} />
            <span>{name}</span>
          </Link>
        </h5>
        <h6 className="card-subtitle text-muted">{fromNow(createAt)}</h6>
        <p className="card-text">{contents}</p>
        <hr />
        <div className="card-info">
          <button type="button" className="thumb-count" onClick={handleLikeClock}>
            <i className={`far fa-thumbs-up ${likesOfMe ? 'on' : ''}`} />
            &nbsp;
            {likes} 개
          </button>
          <span className="comment-count">
            <i className="far fa-comment-alt" />
            &nbsp;
            {commentsCount} 개
          </span>
        </div>
      </div>
      <Comments postId={postId} />
      <CommentForm postId={postId} />
      <style jsx>{cardStyle}</style>
      {profileStyle.styles}
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

  .card .profile-image {
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    margin-right: 5px;
    overflow: hidden;
    border: 1px solid #ddd;
  }
`;

const profileStyle = css.resolve`
  color: rgb(59, 89, 153);
  display: inline-flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export default React.memo(Post);

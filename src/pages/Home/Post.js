import React from 'react';
import classNames from 'classnames';
import moment from 'moment';
import * as actions from '@/data/rootActions';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { useDispatch, useSelector } from 'react-redux';
import * as selectors from '@/data/rootSelectors';

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const {
    seq,
    createAt,
    writer: { name, profileImageUrl },
    contents,
    likes,
    likesOfMe,
  } = post;
  const commentsCount = useSelector(selectors.comments.getCommentsCount(seq));
  const datetime = moment(createAt).fromNow();
  const likeHandler = (e) => {
    e.preventDefault();
    dispatch(actions.posts.likePost(seq));
  };

  const handleClickUser = () => dispatch(actions.router.push(`/u/${name}`));

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {/*<Link to={`/u/${name}`}>*/}
          {/*  <img src={profileImageUrl} alt="" />*/}
          {/*  {name}*/}
          {/*</Link>*/}
          <span className="user-profile" onClick={handleClickUser}>
            <img src={profileImageUrl} alt="" />
            {name}
          </span>
        </h5>
        <h6 className="card-subtitle text-muted">{datetime}</h6>
        <p className="card-text">{contents}</p>
        <hr />
        <div className="card-info">
          <button type="button" className="thumb-count" onClick={likeHandler}>
            <i
              className={classNames('far fa-thumbs-up', {
                on: likesOfMe,
              })}
            />{' '}
            {likes} 개
          </button>
          <span className="comment-count">
            <i className="far fa-comment-alt" /> {commentsCount} 개
          </span>
        </div>
      </div>
      <CommentList postSeq={seq} />
      <CommentForm postSeq={seq} />
      <style jsx global>{`
        .user-profile {
          color: rgb(59, 89, 153);
        }
        .user-profile:hover {
          text-decoration: underline;
          cursor: pointer;
        }
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
        img {
          width: 3rem;
          height: 3rem;
          border-radius: 100%;
          overflow: hidden;
          margin-right: 5px;
        }
      `}</style>
    </div>
  );
};

export default Post;

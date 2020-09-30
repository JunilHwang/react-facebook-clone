import React from 'react';
import css from 'styled-jsx/css';
import Comments from './Comments';
import CommentForm from './CommentForm';

const Card = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Harry</h5>
        <h6 className="card-subtitle text-muted">10분전</h6>
        <p className="card-text">안녕하세요. 다같이 리엑트를 배워봅시다. 리덕스도 물런 배워야죠</p>
        <hr />
        <div className="card-info">
          <button type="button" className="thumb-count">
            <i className="far fa-thumbs-up">4 개</i>
          </button>
          <span className="comment-count">
            <i className="far fa-comment-alt">3 개</i>
          </span>
        </div>
      </div>
      <Comments />
      <CommentForm />
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

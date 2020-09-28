import React from 'react';
import css from 'styled-jsx/css';

const Comments = () => {
  return (
    <>
      <ul className="comment-list">
        <li className="comment">
          <div className="comment-info">
            <h6 className="comment-writer">Aiden</h6>
            <div className="comment-datetime">10분전</div>
          </div>
          <p className="comment-text">그래요 배워야죠 배워야 남는거죠...</p>
        </li>
      </ul>
      <style jsx>{commentStyle}</style>
    </>
  );
};

const commentStyle = css`
  ul.comment-list {
    padding: 0;
    list-style: none;
  }

  li.comment {
    padding: 20px 40px 24px;
    border-bottom: 1px solid #e6ecf5;
    background-color: #fafbfd;
    position: relative;
  }

  li.comment:first-child {
    border-top: 1px solid #e6ecf5;
  }

  li.comment .comment-text {
    padding-top: 20px;
  }
`;

export default Comments;

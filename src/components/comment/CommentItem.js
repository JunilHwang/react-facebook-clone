import React from 'react';
import css from 'styled-jsx/css';
import dayjs from 'dayjs';

const CommentItem = ({ writer, createAt, contents }) => {
  const fromNow = dayjs(createAt).from(Date.now());
  return (
    <li className="comment">
      <div className="comment-info">
        <h6 className="comment-writer">{writer.name}</h6>
        <div className="comment-datetime">{fromNow}</div>
      </div>
      <p className="comment-text">{contents}</p>
      <style jsx>{commentStyle}</style>
    </li>
  );
};

const commentStyle = css`
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

export default React.memo(CommentItem);

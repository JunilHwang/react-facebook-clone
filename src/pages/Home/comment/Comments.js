import React from 'react';
import css from 'styled-jsx/css';
import CommentItem from './CommentItem';

const Comments = ({ comments }) => {
  return (
    <>
      <ul className="comment-list">
        {comments.map((comment) => (
          <CommentItem {...comment} key={`comment_${comment.seq}`} />
        ))}
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
`;

export default Comments;
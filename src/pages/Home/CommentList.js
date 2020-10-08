import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const CommentList = (props) => {
  const { commentList = [] } = props;

  return (
    <ul className="comment-list">
      {commentList.map((comment) => (
        <Comment key={comment.seq} comment={comment} />
      ))}
      <style jsx global>{`
        ul.comment-list {
          padding: 0;
          list-style: none;
        }
      `}</style>
    </ul>
  );
};

CommentList.propTypes = {
  commentList: PropTypes.arrayOf(PropTypes.shape(Comment.propTypes)),
};

export default CommentList;

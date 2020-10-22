import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import * as selectors from '@/data/rootSelectors';

const CommentList = ({ postSeq }) => {
  const comments = useSelector(selectors.comments.getComments);
  const commentsList = comments[postSeq] || [];

  return (
    <ul className="comment-list">
      {commentsList.map((comment) => (
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

export default CommentList;

import React from 'react';
import css from 'styled-jsx/css';

import CommentItem from './CommentItem';
import * as selectors from '@/data/rootSelectors';
import { useSelector } from 'react-redux';

const Comments = ({ postSeq }) => {
  const comments = useSelector(selectors.comments.getComments);
  const commentsList = comments[postSeq] || [];

  return (
    <>
      <ul className="comment-list">
        {commentsList.map((comment) => (
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

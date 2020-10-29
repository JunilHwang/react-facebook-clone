import React from 'react';
import css from 'styled-jsx/css';

import CommentItem from './CommentItem';
import * as selectors from '@/data/rootSelectors';
import { useSelector } from 'react-redux';
import { StatusTypes } from '@/services';

const sorting = (a, b) => new Date(a.createAt) - new Date(b.createAt);

const Comments = ({ postId }) => {
  const comments = useSelector(selectors.comments.getComments);
  const commentsList = (comments[postId] || []).sort(sorting);
  const allCommentStatus = useSelector(selectors.comments.getStatusOf);
  const commentStatus = allCommentStatus[postId] || StatusTypes.Loading;

  return (
    <>
      {commentStatus.cata({
        Loading: () => <div>댓글을 가져오는 중입니다.</div>,
        Loaded: () => (
          <ul className="comment-list">
            {commentsList.map((comment) => (
              <CommentItem {...comment} key={`comment_${comment.seq}`} />
            ))}
          </ul>
        ),
        Error: (message) => <strong>{message}</strong>,
      })}
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

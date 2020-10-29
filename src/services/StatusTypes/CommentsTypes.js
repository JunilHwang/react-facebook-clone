import { tagged, taggedSum } from 'daggy';

const Comment = tagged('Comment', ['seq', 'writer', 'contents', 'createAt']);

const CommentsTypes = taggedSum('CommentsTypes', {
  Loading: ['loadingMessage'],
  Comments: [Comment],
  Error: ['errorMessage'],
});

export default CommentsTypes;

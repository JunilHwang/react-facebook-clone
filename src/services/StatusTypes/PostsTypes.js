import { tagged, taggedSum } from 'daggy';

const Post = tagged('Post', ['seq', 'contents', 'comments', 'likes', 'likesOfMe', 'writer', 'createAt']);

const PostsTypes = taggedSum('PostsTypes', {
  Loading: ['loadingMessage'],
  Posts: [Post],
  Error: ['errorMessage'],
});

export default PostsTypes;

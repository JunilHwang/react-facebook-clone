import { taggedSum } from 'daggy';

const PostsTypes = taggedSum('PostsTypes', {
  Ready: [],
  InitLoading: [],
  ScrollLoading: [],
  Loaded: [],
  Error: ['errorMessage'],
});

export default PostsTypes;

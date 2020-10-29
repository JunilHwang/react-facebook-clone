import { taggedSum } from 'daggy';

const CommentsTypes = taggedSum('CommentsTypes', {
  Ready: [],
  InitLoading: [],
  Loaded: [],
  Error: ['errorMessage'],
});

export default CommentsTypes;

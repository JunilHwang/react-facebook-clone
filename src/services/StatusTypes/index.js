import { taggedSum } from 'daggy';

export default taggedSum('PostsTypes', {
  Loading: [],
  Loaded: [],
  Error: ['message'],
});

import { taggedSum } from 'daggy';

export default taggedSum('PostsTypes', {
  Ready: [],
  Loading: [],
  Loaded: [],
  Error: ['message'],
});

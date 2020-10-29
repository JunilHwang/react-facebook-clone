import { taggedSum } from 'daggy';

const UsersTypes = taggedSum('UsersTypes', {
  Loading: ['loadingMessage'],
  User: ['seq', 'email', 'name', 'profileImageUrl'],
  Error: ['errorMessage'],
});

export default UsersTypes;

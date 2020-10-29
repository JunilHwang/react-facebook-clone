import { taggedSum } from 'daggy';

const UsersTypes = taggedSum('UsersTypes', {
  Ready: [],
  WaitSignUp: [],
  WaitSignIn: [],
  Loaded: [],
  Error: ['errorMessage'],
});

export default UsersTypes;

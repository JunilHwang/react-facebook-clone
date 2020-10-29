const { tagged, taggedSum } = require('daggy');

export const User = tagged('User', []);

export const Users = taggedSum('Users', {});

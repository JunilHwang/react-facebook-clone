const { tagged, taggedSum } = require('daggy');

export const Post = tagged('Post', []);

export const Posts = taggedSum('Posts', {});

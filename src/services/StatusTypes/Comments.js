const { tagged, taggedSum } = require('daggy');

export const Comment = tagged('Comment', []);

export const Comments = taggedSum('Comments', {});

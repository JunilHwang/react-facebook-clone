import { createSelector } from 'reselect';

export const selectAllPosts = ({ posts, router }) => {
  const { writer } = router.location.query;
  return { ...posts, writerSeq: writer ? Number(writer) : null };
};

export const selectAllPostsOrderByCreateAt = createSelector(selectAllPosts, ({ entries, ids, writerSeq }) => {
  const posts = ids.map((seq) => entries[seq]).sort((a, b) => b.createAt - a.createAt);
  if (writerSeq === null) return posts;
  return posts.filter(({ writer }) => writer.seq === writerSeq);
});

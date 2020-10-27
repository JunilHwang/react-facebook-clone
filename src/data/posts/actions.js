import * as ActionTypes from '@/data/rootActionTypes';
import * as selectors from '@/data/rootSelectors';
import apis from '@/services/apis';

export const setPosts = (posts) => ({
  type: ActionTypes.SET_POSTS,
  posts,
});

export const addPost = ({ contents, resetForm }) => async (dispatch) => {
  try {
    await apis.postsApi.createPost(contents);
    dispatch(getPosts());
    resetForm();
  } catch (error) {
    console.error(error);
  }
};

export const getPosts = () => async (dispatch, getState) => {
  try {
    const user = selectors.users.getUser(getState());
    const friends = await apis.usersApi.getFriendsOfMine();
    const connections = [...friends, user];
    const postsOfConnectionsPromise = connections.map(({ seq: userId }) => apis.postsApi.getAllPosts({ userId }));
    const postsOfConnections = await Promise.all(postsOfConnectionsPromise);
    const posts = [].concat.apply([], postsOfConnections);
    dispatch(setPosts(posts));
  } catch (error) {
    console.error(error);
  }
};

export const likePost = (postId) => async (dispatch, getState) => {
  try {
    const user = selectors.users.getUser(getState());
    const userId = user.seq;
    await apis.postsApi.likePost({ userId, postId });
    dispatch(getPosts());
  } catch (error) {
    console.error(error);
  }
};

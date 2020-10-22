import * as ActionTypes from '@/data/rootActionTypes';
import apis from '@/services/apis';
import * as actions from '@/data/rootActions';
import * as selectors from '@/data/rootSelectors';

export const addPost = ({ contents, resetForm }) => async (dispatch) => {
  try {
    await apis.postsApi.createPost(contents);
    dispatch(actions.posts.getPosts());
    resetForm();
  } catch (error) {
    console.error(error);
  }
};

export const getPosts = () => async (dispatch, getState) => {
  try {
    const user = selectors.users.getUser(getState());
    const connections = [...(await apis.usersApi.getFriendsOfMine()), user];
    const postsOfConnectionsPromise = connections.map((user) => apis.postsApi.getAllPosts({ userId: user.seq }));
    const postsOfConnections = await Promise.all(postsOfConnectionsPromise);
    const posts = [].concat.apply([], postsOfConnections);
    dispatch(actions.posts.setPosts(posts));
  } catch (error) {
    console.error(error);
  }
};

export const setPosts = (posts) => ({
  type: ActionTypes.SET_POSTS,
  posts,
});

export const likePost = (postId) => async (dispatch, getState) => {
  try {
    const user = selectors.users.getUser(getState());
    await apis.postsApi.likePost({ userId: user.seq, postId });
    dispatch(actions.posts.getPosts());
  } catch (error) {
    console.error(error);
  }
};

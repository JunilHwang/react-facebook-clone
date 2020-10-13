import Repository from "./Repository";
import UserRepository from "./UserRepository";

export const postRepository = new Repository('posts');
export const commentRepository = new Repository('comments');
export const userRepository = new UserRepository('users');

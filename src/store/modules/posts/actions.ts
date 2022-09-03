export const getAllPosts = ({ state, commit }, payload) => {
  commit('setPosts', payload);
}
export const getAllPosts = ({ state, commit }: { state: any, commit: any }, payload: any) => {
  commit('setPosts', payload);
}
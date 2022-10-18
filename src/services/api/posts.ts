import API from './index';
import { IPostItem } from '../../types/posts';

class PostsAPIInstance extends API {
  public getPosts(): Promise<IPostItem[]> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response = await this.request({
            url: '/feed',
            method: 'GET',
          });
          resolve(response.data);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }
  public getOnePost(id: number): Promise<IPostItem> {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const response = await this.request({
            url: `/feed/${id}`,
            method: 'GET',
          });
          resolve(response.data);
        } catch (e) {
          reject(e);
        }
      })();
    });
  }
}

const PostsAPI = new PostsAPIInstance({
  baseURL: 'https://quiet-ridge-83792.herokuapp.com/api',
});

export default PostsAPI;

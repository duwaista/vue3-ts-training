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

// http://192.168.0.12:5000
// https://quiet-ridge-83792.herokuapp.com/api
const PostsAPI = new PostsAPIInstance({
  baseURL: 'http://192.168.0.12:5000/api',
});

export default PostsAPI;

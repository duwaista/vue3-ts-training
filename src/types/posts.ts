export interface IPostItem {
  id: number;
  uid: string;
  avatarUrl: string | null;
  createdAt: string;
  email: string;
  posts: string;
  type: 'image' | 'video';
}
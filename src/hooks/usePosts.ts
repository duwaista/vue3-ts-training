import { onMounted, ref } from "vue";

import PostsAPI from "../services/api/posts";
import { IPostItem } from "../types/posts";

export default function() {
  const loading = ref<boolean>(false);
  const posts = ref<IPostItem[]>([]);
  const error = ref<Error | null>(null);

  const fetchPosts = async () => {
    loading.value = true;
    if (error) error.value = null;
    try {
      posts.value = await PostsAPI.getPosts();
    } catch (e: any) {
      console.error(e);
      error.value = e;
    } finally {
      loading.value = false;
    }
  }

  onMounted(fetchPosts);

  return {
    loading,
    posts,
    error,
  }
}
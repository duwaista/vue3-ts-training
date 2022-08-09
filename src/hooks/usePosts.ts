import { onMounted, ref } from "vue";

import PostsAPI from "../services/api/posts";
import { IOldPost } from "../types/posts";

export default function() {
  const loading = ref<boolean>(false);
  const posts = ref<IOldPost[]>([]);

  const fetchPosts = async () => {
    loading.value = true;
    try {
      const response = await PostsAPI.getPosts();
      posts.value = response;
    } catch (e) {
      console.error(e);
    } finally {
      loading.value = false;
    }
  }

  onMounted(fetchPosts);

  return {
    loading,
    posts
  }
}
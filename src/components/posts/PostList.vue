<template>
  <div v-if="loading">Loading...</div>
  <div class="posts-container" v-if="!loading && posts.length">
    <div v-for="post in posts">
      <span>{{ post.email }}</span>
      <img :src="post.posts">
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import usePosts from "../../hooks/usePosts";

export default defineComponent({
  name: "PostList",
  setup() {
    const { loading, posts } = usePosts();

    return {
      loading,
      posts
    }
  }
})
</script>

<style scoped>

</style>
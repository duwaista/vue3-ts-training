<template>
  <div class="">
    <div v-if="loading">
      Loading...
    </div>
    <div
      v-if="!loading && posts.length"
      class="posts-container"
    >
      <post-item
        v-for="post in posts"
        :key="post.id"
        :item="post"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import usePosts from "../../hooks/usePosts";
import PostItem from "./PostItem.vue";

const { loading, posts } = usePosts();

</script>

<style>
.posts-container {

}
</style>
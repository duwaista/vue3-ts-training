<template>
  <div class="">
    <div v-if="loading">Loading...</div>
    <div
      class="posts-container"
      v-if="!loading && posts.length"
    >
      <post-item v-for="post in posts" :item="post" :key="post.id" />
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
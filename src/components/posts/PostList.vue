<template>
  <div class="">
    <Card v-if="loading">
      Loading...
    </Card>
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
import Card from "../UI/Card.vue";

const { loading, posts } = usePosts();

</script>

<style>
.posts-container {

}
</style>
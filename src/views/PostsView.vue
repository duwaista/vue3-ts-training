<template>
  <div>Крутые посты:</div>
  <post-list />
</template>

<script>
import {defineComponent} from "vue";
import PostList from "../components/posts/PostList.vue";

export default defineComponent({
  name: "PostsView",
  components: { PostList }
})
</script>

<style scoped>

</style>
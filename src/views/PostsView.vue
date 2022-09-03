<template>
  <CommonPageLayout>
    <Card>
      <span>Круте посты:</span>
    </Card>
    <post-list />
  </CommonPageLayout>
</template>

<script setup lang="ts">
import PostList from "../components/posts/PostList.vue";
import CommonPageLayout from "../components/CommonPage/CommonPageLayout.vue";
import Card from "../components/UI/Card.vue";

</script>

<style scoped>

</style>
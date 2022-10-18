<template>
  <CommonPageLayout>
    <Card v-if="loading.value">Loading...</Card>
    <PostItem v-else :item="currentPost" />
  </CommonPageLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

import CommonPageLayout from "../components/CommonPage/CommonPageLayout.vue";
import { IPostItem } from "../types/posts";
import PostsAPI from "../services/api/posts";
import PostItem from "../components/posts/PostItem.vue";
import Card from "../components/UI/Card.vue";

const route = useRoute();

const loading = ref<boolean>(false);
const currentPost = ref<IPostItem | object>({});

const fetchCurrentPost = async (id: string | string[]) => {
  if (Array.isArray(id)) return;
  loading.value = true;
  try {
    currentPost.value = await PostsAPI.getOnePost(parseInt(id, 10));
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}

onMounted(() => fetchCurrentPost(route.params.id));
</script>

<template>
  <CommonPageLayout>
    <div v-if="loading.value">Loading...</div>
    <PostItem v-else :item="currentPost" />
  </CommonPageLayout>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";

import CommonPageLayout from "../components/CommonPage/CommonPageLayout.vue";
import { IPostItem } from "../types/posts";
import PostsAPI from "../services/api/posts";
import PostItem from "../components/posts/PostItem.vue";

const route = useRoute();

const loading = ref<boolean>(false);
const currentPost = reactive<IPostItem | object>({});

const fetchCurrentPost = async (id: string | string[]) => {
  if (Array.isArray(id)) return;
  loading.value = true;
  try {
    const response = await PostsAPI.getOnePost(parseInt(id, 10));
    Object.assign(currentPost, response);
  } catch (e) {
    console.log(e);
  } finally {
    loading.value = false;
  }
}

onMounted(() => fetchCurrentPost(route.params.id));
</script>

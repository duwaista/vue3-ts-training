<template>
  <Card>
    <template v-slot:info>
      <span>{{ item.email }}</span>
    </template>
    <template v-slot:actions>
      <router-link :to="`/posts/${item.id}`">К постику</router-link>
    </template>
    <Image
      :alt="item.posts"
      :src="item.posts"
      :height="300"
      :fullscreen="true"
    />
  </Card>
</template>

<script setup lang="ts">
import { IPostItem } from "../../types/posts";
import Card from "../UI/Card.vue";
import Image from "../UI/Image.vue";

defineProps<{
  item: IPostItem,
}>();

</script>

<style scoped>

</style>
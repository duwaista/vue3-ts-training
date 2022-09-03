<template>
  <Card>
    <template v-slot:info>
      <span  >{{ item.email }}</span>
    </template>
    <template v-slot:actions>
      <router-link :to="`/posts/${item.id}`">AAAA</router-link>
    </template>
    <img :alt="item.posts" :src="item.posts" />
  </Card>
</template>

<script setup lang="ts">
import { IPostItem } from "../../types/posts";
import Card from "../UI/Card.vue";

defineProps<{
  item: IPostItem;
}>();

</script>

<style scoped>

</style>
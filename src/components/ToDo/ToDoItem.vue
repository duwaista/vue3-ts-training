<script setup lang="ts">
import { ToDoItemType } from "../../types/todo";
import Card from "../UI/Card.vue";

type Props = {
  item: ToDoItemType,
};

defineProps<Props>();
</script>

<template>
  <Card>
    <template v-slot:info>
      <span v-memo="[item.text]">{{ item.text || "-" }}</span>
    </template>
    <template v-slot:actions>
      <input
        type="checkbox"
        :checked="item.isDone"
        v-memo="[item.isDone]"
      />
    </template>
  </Card>
</template>

<style scoped>

</style>
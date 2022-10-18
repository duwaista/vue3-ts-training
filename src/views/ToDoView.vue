<script setup lang="ts">
import { computed, ref } from "vue";

import { ToDoItemType } from "../types/todo";
import ToDoItem from "../components/ToDo/ToDoItem.vue";
import Card from "../components/UI/Card.vue";
import CommonPageLayout from "../components/CommonPage/CommonPageLayout.vue";

const todoItems = ref<ToDoItemType[]>([]);
const listLength = ref<number>(1000);

const selectedItemsCount = computed(() => {
  return todoItems.value.reduce((sum, current) => {
    if (current.isDone) sum++;
    return sum;
  }, 0);
});

const onItemCheck = (task: ToDoItemType) => {
  const { id, isDone } = task;
  // Why not?
  const currentItemIndex = todoItems.value.findIndex((item) => item.id === id);
  if (currentItemIndex !== -1) {
    todoItems.value[currentItemIndex].isDone = !isDone;
  }
};

const createTestData = () => {
  const testData: ToDoItemType[] = [];
  // Go, do crime
  for (let i = 0; i < listLength.value; i++) {
    testData[i] = {
      id: i,
      isDone: false,
      text: `Test item ${i}`,
    }
  }
  todoItems.value = testData;
}

</script>

<template>
  <CommonPageLayout>
    <Card v-if="!todoItems.length">
      <template v-slot:info>
        <input type="number" v-model="listLength">
      </template>
      <template v-slot:actions>
        <button @click="createTestData">Create test data</button>
      </template>
    </Card>
    <Card v-else>
      <template v-slot:info>
        <span>Selected {{ selectedItemsCount }} of {{ listLength }}</span>
      </template>
      <template v-slot:actions>
        <button @click="todoItems = []">Reset list</button>
      </template>
    </Card>

    <to-do-item
      v-for="task in todoItems"
      :key="task.id"
      :item="task"
      @click="() => onItemCheck(task)"
    />

    <Card v-if="!todoItems.length">
      <template v-slot:info>
        Click "create test data" to... create data 🤡
      </template>
    </Card>
  </CommonPageLayout>
</template>

<style scoped>

</style>
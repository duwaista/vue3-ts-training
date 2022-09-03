<template>
  <div class="card-container">
    <div
      v-if="slots.info || slots.actions"
      class="card-header-container"
    >
      <div>
        <slot name="info" />
      </div>
      <div>
        <slot name="actions" />
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

const slots = useSlots();
</script>

<style scoped>
.card-container {
  width: 100%;
  padding: 1em;
  margin: 1em 0;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}
.card-header-container {
  display: flex;
  padding-bottom: 1em;
  justify-content: space-between;
}
</style>
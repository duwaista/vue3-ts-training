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
  padding: 0 1em;
  margin: 1em 0;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
}
.card-container > div:first-of-type {
  padding-top: 1em;
}
.card-container > div:last-of-type {
  padding-bottom: 1em;
}
.card-header-container {
  display: flex;
  justify-content: space-between;
}
</style>
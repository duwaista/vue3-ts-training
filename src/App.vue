<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App"
});
</script>

<style>
body, html {
  margin: 0;
  background-color: #fff0f4;
}
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  box-sizing: border-box;
}
</style>
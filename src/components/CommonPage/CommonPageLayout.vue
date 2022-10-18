<template>
  <div class="common-page-container">
    <header>
      <slot name="header" />
    </header>
    <main class="common-page-content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.common-page-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
@media screen and (min-width: 700px) {
  .common-page-content {
    width: 60%;
    max-width: 600px;
  }
}
@media screen and (max-width: 700px) {
  .common-page-content {
    width: 96%;
  }
}
</style>

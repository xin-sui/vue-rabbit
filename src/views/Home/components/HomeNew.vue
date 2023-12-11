<script setup>
import HomePanel from "./HomePanel.vue";


</script>

<template>
  <HomePanel :title="'123'" :sub-title="'你好'">
    <template #main>
      123
    </template>
  </HomePanel>
</template>

<style scoped lang="scss">

</style>
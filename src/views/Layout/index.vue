
<script setup>
import { RouterView } from 'vue-router';
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from "./components/LayoutFixed.vue";
//触发获取导航列表方法
import { useCategoryStore } from "@/stores/categoryStore"
import { onMounted } from "vue";
const categoryStore = useCategoryStore()
onMounted(() => {
  categoryStore.getCategory()
})

</script>

<template>
  <div>
    <LayoutFixed></LayoutFixed>
    <LayoutNav></LayoutNav>
    <LayoutHeader></LayoutHeader>

    <!-- 路由出口 -->
    <RouterView />
    <LayoutFooter></LayoutFooter>
  </div>
</template>



<style lang="scss" scoped></style>@/stores/categoryStore
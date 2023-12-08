
<script setup>
import { RouterView } from 'vue-router';
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
import LayoutFixed from "@/views/Layout/components/LayoutFixed.vue";
</script>

<template>
    <div>
      <LayoutFixed></LayoutFixed>
        <LayoutHeader></LayoutHeader>
        <LayoutNav></LayoutNav>
        <!-- 路由出口 -->
        <RouterView />
        <LayoutFooter></LayoutFooter>
    </div>
</template>



<style lang="scss" scoped></style>
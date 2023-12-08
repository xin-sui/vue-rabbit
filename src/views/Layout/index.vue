
<script setup>
import { RouterView } from 'vue-router';
import LayoutHeader from "@/views/Layout/components/LayoutHeader.vue";
import LayoutNav from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';

</script>

<template>
    <div>
        <LayoutHeader></LayoutHeader>
        <LayoutNav></LayoutNav>
        <!-- 路由出口 -->
        <RouterView />
        <LayoutFooter></LayoutFooter>
    </div>
</template>



<style lang="scss" scoped></style>
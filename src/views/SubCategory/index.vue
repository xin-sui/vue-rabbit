<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router"
import { getCategoryFilterAPI, getSubCategoryAPI } from '@/apis/category';
import GoodsItem from '../Home/components/GoodsItem.vue';

const route = useRoute();
//二级分类面包屑
const categoryData = ref([])
const getCategoryFilter = async () => {
    // 调用getCategoryFilterAPI函数，获取分类过滤数据
    const res = await getCategoryFilterAPI(route.params.id)
    // 将获取到的分类过滤数据赋值给categoryData
    categoryData.value = res.result
}
//二级分类商品数据列表
const goodsList = ref({})
const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime' //| 'orderNum' | 'evaluateNum'
})
const getGoodsList = async () => {
    const res = await getSubCategoryAPI(reqData)
    goodsList.value = res.result
}
onMounted(() => {
    // 当组件加载完毕时调用
    getCategoryFilter()
    getGoodsList()
})
</script>

<template>
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${categoryData.parentId}` }">{{ categoryData.parentName }}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <el-tabs>
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body">
                <!-- 商品列表-->
                <GoodsItem v-for="goods in goodsList.items" :goods="goods" :key="goods.id"></GoodsItem>
            </div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>
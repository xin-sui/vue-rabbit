<script setup>
import { getTopCategoryAPI } from '@/apis/category';
import { getBannerAPI } from "@/apis/home";
import { onMounted, ref, onBeforeUpdate, watch } from 'vue';
import { onBeforeRouteUpdate, useRoute } from 'vue-router';
import GoodsItem from '../Home/components/GoodsItem.vue';

const categoryData = ref({})
const route = useRoute()
//获取面包屑导航数据
const getTopCategory = async (id = route.params.id) => { //如果传入id则为传入id，否则为路由id
    // 调用getTopCategoryAPI函数，获取id对应的分类信息
    const res = await getTopCategoryAPI(id)
    // console.log(res);
    categoryData.value = res.result
}
//获取商品页轮播图数据
const bannerList = ref([])
const getBanner = async () => {
    const res = await getBannerAPI({
        distributionSite: "2"
    })
    bannerList.value = res.result
}
// 第一种方法监听路由
// watch(() => route.params.id, () => {
//     // 当路由参数id发生变化时，调用getTopCategory函数
//     getTopCategory()
// })
//第二种方法 使用onBeforeRouteUpdate
onBeforeRouteUpdate((to) => {
    getTopCategory(to.params.id)
})
onMounted(() => {
    // 当组件加载完成时调用
    getTopCategory()
    getBanner()
})
//获取轮播图banner
</script>

<template>
    <div class="top-category">
        <div class="container m-top-20">
            <!-- 面包屑 -->
            <div class="bread-container">
                <el-breadcrumb separator=">">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <!--轮播图 -->
            <div class="home-banner">
                <el-carousel height="500px">
                    <el-carousel-item v-for="item in bannerList" :key="item.id">
                        <img :src="item.imgUrl" alt="">
                    </el-carousel-item>
                </el-carousel>
            </div>
            <!-- 分类 -->
            <div class="sub-list">
                <h3>全部分类</h3>
                <ul>
                    <li v-for="i in categoryData.children" :key="i.id">
                        <RouterLink to="/">
                            <img :src="i.picture" />
                            <p>{{ i.name }}</p>
                        </RouterLink>
                    </li>
                </ul>
            </div>
            <div class="ref-goods" v-for="item in categoryData.children" :key="item.id">
                <div class="head">
                    <h3>- {{ item.name }}-</h3>
                </div>
                <div class="body">
                    <GoodsItem v-for="good in item.goods" :goods="good" :key="good.id" />
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
.top-category {
    h3 {
        font-size: 28px;
        color: #666;
        font-weight: normal;
        text-align: center;
        line-height: 100px;
    }

    .sub-list {
        margin-top: 20px;
        background-color: #fff;

        ul {
            display: flex;
            padding: 0 32px;
            flex-wrap: wrap;

            li {
                width: 168px;
                height: 160px;


                a {
                    text-align: center;
                    display: block;
                    font-size: 16px;

                    img {
                        width: 100px;
                        height: 100px;
                    }

                    p {
                        line-height: 40px;
                    }

                    &:hover {
                        color: $xtxColor;
                    }
                }
            }
        }
    }

    .ref-goods {
        background-color: #fff;
        margin-top: 20px;
        position: relative;

        .head {
            .xtx-more {
                position: absolute;
                top: 20px;
                right: 20px;
            }

            .tag {
                text-align: center;
                color: #999;
                font-size: 20px;
                position: relative;
                top: -20px;
            }
        }

        .body {
            display: flex;
            justify-content: space-around;
            padding: 0 40px 30px;
        }
    }

    .bread-container {
        padding: 25px 0;
    }
}

.home-banner {
    width: 1240px;
    height: 500px;
    margin: 0 auto;

    img {
        width: 100%;
        height: 500px;
    }
}
</style>
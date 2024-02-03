// 导入vue-router模块中的createRouter 路由实例和createWebHistory 创建history模式路由函数
import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";
import Detail from "@/views/Detail/index.vue";
import CartList from "@/views/CartList/index.vue";
import Checkout from "@/views/Checkout/index.vue";
import Pay from "@/views/Pay/index.vue";
import PayBack from "@/views/Pay/PayBack.vue";
import Member from "@/views/Member/index.vue";
import UserOrder from "@/views/Member/components/UserOrder.vue";
import UserInfo from "@/views/Member/components/UserInfo.vue";

// 创建一个路由，并设置基础路径为BASE_URL
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    //path和component对应关系位置
    // 路由配置
    routes: [
        {
            // 路由路径
            path: "/",
            // 路由组件
            component: Layout,
            children: [
                {
                    // 路由路径
                    path: "", //滞空默认渲染
                    // 路由组件
                    component: Home
                },
                {
                    // 二级路由路径分类
                    path: "category/:id",
                    // 路由组件
                    component: Category
                },
                {
                    // 二级路由路径
                    path: "category/sub/:id",
                    // 路由组件
                    component: SubCategory
                },
                {
                    path: "detail/:id",
                    component: Detail
                },
                {
                    path: "cartlist",
                    component: CartList
                },
                {
                    path: "checkout",
                    component: Checkout
                },
                {
                    path: "pay",
                    component: Pay
                },
                {
                    path: "paycallback",
                    component: PayBack
                },
                {
                    path: "member",
                    component: Member,
                    children: [
                        {path: "user", component: UserInfo},
                        {path: "order", component: UserOrder}
                    ]
                }
            ]
        },
        {
            // 路由路径
            path: "/login",
            // 路由组件
            component: Login
        }
    ],
    //路由滚动行为定制 切换路由时回到顶部
    scrollBehavior() {
        return {top: 0};
    }
});

// 导出路由实例
export default router;

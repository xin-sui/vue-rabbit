// 导入vue-router模块中的createRouter 路由实例和createWebHistory 创建history模式路由函数
import {createRouter, createWebHistory} from "vue-router";
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
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
                    // 路由路径
                    path: "/category",
                    // 路由组件
                    component: Category
                }
            ]
        },
        {
            // 路由路径
            path: "/login",
            // 路由组件
            component: Login
        }
    ]
});

// 导出路由实例
export default router;

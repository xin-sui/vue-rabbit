//axios 基础封装
import router from "@/router";
import {useUserStore} from "@/stores/user";
import axios from "axios";
import {ElMessage} from "element-plus";
import "element-plus/theme-chalk/el-message.css";
const httpInstance = axios.create({
    //基础URl
    baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
    //时间时间
    timeout: 5000
});

// axios请求拦截器
httpInstance.interceptors.request.use(
    (config) => {
        const userStore = useUserStore();
        //请求头添加用户身份信息
        const token = userStore.userInfo.token;
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (e) => Promise.reject(e)
);

// axios响应式拦截器
httpInstance.interceptors.response.use(
    (res) => res.data,
    (e) => {
        //统一错误提示
        ElMessage({
            type: "error",
            message: e.response.data.message
        });
        //401 token 失效处理
        if (e.response && e.response.status === 401) {
            const userStore = useUserStore();
            userStore.clearUserInfo();
            //跳转到登录页
            router.push("/login");
        }
        //返回错误信息
        return Promise.reject(e);
    }
);

//导出
export default httpInstance;

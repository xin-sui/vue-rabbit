import httpInstance from "@/utils/https";

// 定义一个函数，用于登录API
export const loginAPI = (account, password) => {
    // 返回一个http实例
    return httpInstance({
        // 请求的url
        url: "/login",
        // 请求的方法
        method: "post",
        // 请求的数据
        data: {
            account,
            password
        }
    });
};

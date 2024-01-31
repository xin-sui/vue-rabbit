import httpInstance from "@/utils/https";
//获取订单详情页
export const getOrderAPI = (id) => {
    return httpInstance({
        url: `/member/order/${id}`
    });
};

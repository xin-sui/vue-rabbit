import httpInstance from "@/utils/https";

export const getUserOrderAPI = (params) => {
    return httpInstance({
        url: "/member/order",
        method: "GET",
        params
    });
};

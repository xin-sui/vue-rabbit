import httpInstance from "@/utils/https";
export const getChekInfoAPI = () => {
    return httpInstance({
        url: "/member/order/pre"
    });
};

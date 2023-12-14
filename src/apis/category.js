import httpInstance from "@/utils/https";

export const getTopCategoryAPI = (id) => {
    return httpInstance({
        url: "/category",
        params: {
            id
        }
    });
};

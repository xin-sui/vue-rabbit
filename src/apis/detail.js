import httpInstance from "@/utils/https";

export const getDetailsAPI = (id) => {
    return httpInstance({
        url: "/goods",
        params: {
            id
        }
    });
};

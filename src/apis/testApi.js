import httpInstance from "@/utils/https";
export function getCategoryList() {
    return httpInstance({
        url: "home/category/head"
    });
}

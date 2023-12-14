//封装轮播图相关业务代码

import {onMounted, ref} from "vue";
import {getBannerAPI} from "@/apis/home";
//获取商品页轮播图数据
export function useBanner() {
    const bannerList = ref([]);
    const getBanner = async () => {
        const res = await getBannerAPI({
            distributionSite: "2"
        });
        bannerList.value = res.result;
    };
    onMounted(() => {
        // 当组件加载完成时调用
        getBanner();
    });

    return {
        bannerList
    };
}

import httpInstance from '@/utils/https'

//封装获取banner接口
export function getBannerAPI() {
    return httpInstance({
        url: '/home/banner'
    })
}
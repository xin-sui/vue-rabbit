import httpInstance from '@/utils/https'

//封装获取banner接口
// 导出一个函数，用于获取banner API
export function getBannerAPI() {
    // 返回一个httpInstance，请求地址为'/home/banner'
    return httpInstance({
        url: '/home/banner'
    })
}

/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
export const findNewAPI = () => {
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
    return httpInstance({
        url: 'home/hot'
    })
}
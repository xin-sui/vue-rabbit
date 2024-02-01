import dayjs from "dayjs";
import {computed, ref, onUnmounted} from "vue";

export const useCountdown = () => {
    //1.响应式数据
    const time = ref(0);
    //格式化时间 为分秒
    const formaTimed = computed(() => {
        return dayjs.unix(time.value).format("mm分ss秒");
    });
    let timer = null;
    //2.开启倒计时函数
    const start = (currenTime) => {
        time.value = currenTime;
        timer = setInterval(() => {
            if (time.value <= 0) {
                clearInterval(timer);
            }
            time.value--;
        }, 1000);
    };
    //组件销毁清除定时器
    onUnmounted(() => {
        clearInterval(timer);
    });
    return {
        formaTimed,
        start
    };
};

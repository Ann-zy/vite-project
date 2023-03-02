import store from "@/store/index";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, Method } from "axios";
import globalConfig from "@/utils/global-config";
import { getCurrentInstance } from "vue";

const { proxy }: any = getCurrentInstance()

const service = axios.create({
    baseURL: globalConfig.host,
    // withCredentials: true, // send cookies when cross-domain requests
    // timeout: 5000, // request timeout
})

service.interceptors.request.use(
    (config: any) => {
        if (store.getters.getLoginInfo) {
            config.headers.token = store.getters.getLoginInfo.token;
        }
        config.headers['syj-version'] = globalConfig.syjVersion; // 灰度版本号
        if (config.isLoading) {
            proxy.$toast({
                duration: 30000,
                loadingType: "spinner",
                forbidClick: true,
            })
        }
        return config;
    },
    (e) => {
        console.log(e)
        return Promise.reject(e)
    }
)

service.interceptors.response.use(
    (response: any) => {
        const { code, data } = response.data

        if (response.config.isLoading) {
            proxy.$toast.clear(true)
        }

        if (![0, "0"].includes(code)) {
            proxy.$toast({
                message: response.data.msg,
                duration: 2000,
            })
            return Promise.reject(response.data)
        }

        return data
    },
    (e) => {
        proxy.$toast.clear()
        proxy.$toast({
            message: "网络异常，请重新尝试！",
            duration: 2000,
        })
        return Promise.reject(e)
    }
)

export default service
import axios from "axios"
import ElementUI from "element-ui"
import router from "../router";
axios.defaults.baseURL = process.env.NODE_ENV === "development" ? "/api" : "http://www.chst.vip"

axios.defaults.withCredentials = true //允许请求携带认证
    //创建请求拦截器。可以给每个请求都携带需要的内容
axios.interceptors.request.use(
        config => {
            if (config.url == "/users/login") {
                return config
            } else {
                let token = localStorage.getItem('hello')
                    //config的值是每个请求对象
                config.headers['authorization'] = token
                console.log(config);
                return config
            }

        }
    )
    // 创建响应拦截器
axios.interceptors.response.use(
    config => {
        console.log(config);
        let data = config.data
        if (data.code == "10022" || data.code == "1004") {
            ElementUI.Message.error('请重新输入')
            console.log(router);
            router.push('/login')

        }
        return config
    }
)
axios.create({
    timeout: 4000
})
export default axios
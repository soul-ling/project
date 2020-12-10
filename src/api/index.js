import axios from "./config"

export const login = (username, password) => axios({
    url: "/users/login",
    method: "post",
    data: {
        password,
        username
    }
})

//获取登入日志
export const getloginlog = () => axios.get("/getloginlog")
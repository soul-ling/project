<template>
  <div class="login">
    <div class="left"></div>
    <div class="container">
      <p>管理系统</p>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-loginForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" plain>提交</el-button>
        </el-form-item>
      </el-form>
      <video
        src="../../assets/video/bg_video.mp4"
        class="bg_video"
        muted
        autoplay
        loop
        preload="auto"
      ></video>
    </div>
  </div>
</template>
<script>
import { login } from "../../api";
import {mapMutations} from "vuex"
export default {
  data() {
    var validateUsername = (rule, value, callback) => {
      // console.log(rule);
      // console.log(value);

      if (value === "") {
        callback("请输入用户名");
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapMutations(["set_userinfo"]),
    submitForm(formName) {
      console.log(this.$refs[formName]);
      this.$refs[formName].validate(valid => {
        if (valid) {
          //代表校验通过
          const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
          // console.log(this.loginForm.username, this.loginForm.password);
          let { username, password } = this.loginForm;
          login(username, password)
            .then(res => {
              loading.close();
              console.log(res);
              if (res.data.state) {
                localStorage.setItem("hello", res.data.token);
                localStorage.setItem("hello-userInfo",JSON.stringify(res.data.userInfo))
                this.set_userinfo(res.data.userInfo)
                this.$router.push("/home");
                this.$message({
                  message: "登录成功，正在跳转...",
                  type: "success"
                });
                
              } else {
                this.$message.error("用户名或密码错误");
              }
              
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
body {
  height: 100%;
  width: 100%;
  position: relative;
  background-image: url("../../assets/imgs/bg.png");
}
.container {
  background-color: rgba(4, 9, 71, 0.25);
  width: 400px;
  height: 300px;
  border-radius: 8px;
  position: absolute;
  right: 100px;
  top: 100px;
  padding-top: 150px;
}
.el-form {
  width: 400px;
}
.bg_video {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  margin: auto;
  z-index: -1;
}
.container p {
  font-size: 35px;
  color: aliceblue;
  margin: 0;
  top: 60px;
  left: 135px;
  position: absolute;
}
.left {
  background-image: url("../../assets/imgs/bg.png");
  width: 50%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 60%;
  position: absolute;
  opacity: 0.5;
  background-position: 60% 65%;
}
</style>
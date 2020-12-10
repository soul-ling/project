<template>
  <div class="homepage">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">导航一</span>
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <span slot="title">选项4</span>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <!-- <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>-->
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部栏 -->
        <el-header>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6">
              <div class="grid-content bg-purple">图标</div>
            </el-col>
            <el-col :span="6">
              <div class="grid-content bg-purple-light">后台管理</div>
            </el-col>
            <el-col :span="6">
              <el-avatar shape="circle" :size="35" fit="fit" :src="url"></el-avatar>
              <span class="grid-content bg-purple">欢迎您，</span>
              <span class="nickname">{{userInfo.nickname}}</span>
              <span class="quit" @click="quit">退出</span>
            </el-col>
          </el-row>
        </el-header>
        <!-- 主题区域 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { getloginlog } from "../../api/index.js";
import {mapState} from "vuex";
// import router from "../../router"
export default {
  data() {
    return {
      isCollapse: true,
      url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1607601016706&di=ece22e55d9542715e594c78ed0162f0f&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Fsinacn19%2F0%2Fw400h400%2F20180910%2F3391-hiycyfw5413589.jpg"
    };
  },
  computed: {
    ...mapState(['userInfo'])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    quit(){
      localStorage.removeItem('hello')
      localStorage.removeItem('hello-userInfo')
      this.$router.push('/login')
    }
  },
  mounted() {
    console.log(getloginlog);
    getloginlog().then(res => {
      console.log(res);
    });
  }
};
</script>
<style lang="scss">
.el-header,
.el-footer {
  text-align: center;
  line-height: 60px;
}

.el-aside {
  // background-color: #ccce62;
  color: #333;
  text-align: center;
  line-height: 50px;
  margin-top: 15px;
  //  width: 160px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #ccce62;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background: #ccce62;
}
.row-bg {
  background-color: #ccce62;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-avatar {
  vertical-align:middle;
  margin-right:10px ;
}

.quit{
  cursor: pointer;
  color: blueviolet;
  margin-left:5px;
}
</style>

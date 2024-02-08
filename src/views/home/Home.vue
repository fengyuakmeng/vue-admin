<template>
  <el-row class="home" :gutter="20">
    <!-- gutter:指定列之间的间距 -->
    <el-col :span="8" style="margin-top: 20px;">
      <el-card shadow="hover">
        <div class="user">
          <img src="../../assets/images/default.png" alt="">
          <div class="user-info">
            <p class="name">Aadmin</p>
            <p class="role">超级管理员</p>

          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间:<span>2024-02-08</span></p>
          <p>上次登录地点:<span>苏州</span></p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px;"></el-col>
  </el-row>
</template>


<style lang="less" scoped>
.home{
  .user{
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }

  .login-info{
      p{
        line-height: 30px;
        font-size: 14px;
        color: #999;
        span{
          color: #666;
          margin-left: 70px;
        }
      }
    }
}
</style>
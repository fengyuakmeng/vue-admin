

<template>
  <el-header>
    <div class="l-content">
      <el-button size="small" @click="handleCollapse">
        <el-icon :size="20">
          <Menu />
        </el-icon>
      </el-button>
      <h3>首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown>
    <span class="el-dropdown-link">
      
      <img class="user" :src="getImageSrc('default')" alt="">
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
        
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    </div>
  </el-header>
</template>


<script>
import {useStore} from "vuex"
export default {
  setup(){
    let store = useStore()
    const getImageSrc = (user)=>{
      return new URL(`../assets/images/${user}.png`,import.meta.url).href;
    }

    let handleCollapse = () => {
      store.commit("updateIsCollapse")
    }

    return {
      getImageSrc,
      handleCollapse
    }

  }
}
</script>

<style lang="less" scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333;
  
}

.l-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }

  h3{
    color: #fff;
  }
}

.r-content{
  .user{
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}

:deep(:focus-visible){
  outline: none;
}
</style>


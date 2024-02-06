<template>
  <div class="common-layout">
    <el-container>
      <CommonAside />
      <el-container>
        <CommonHeader />
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import CommonHeader from "../components/CommonHeader.vue"
import CommonAside from "../components/CommonAside.vue"
export default defineComponent({
  components:{
    CommonHeader,
    CommonAside

  }
})
  

</script>
<style lang="less" scoped>
.el-container{
  flex-wrap: wrap;
  
}

.common-layout{
  height: 100%;
}


</style>
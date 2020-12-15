<template>
<div>
<el-row :gutter="20">
  <el-col :span="20" :offset="2"><div class="grid-content bg-purple"><nav-menu></nav-menu></div></el-col>
  <el-col :span="8" :offset="8"><div class="grid-content bg-purple">呵呵</div></el-col>
</el-row>
</div>
</template>

<script>
export default {
  data () {}
}
</script>

<style lang="less" scoped>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 100%;
  }
</style>

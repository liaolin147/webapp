<template>
  <div>
    <el-menu
      :default-active='activeIndex'
      class='el-menu-demo'
      mode='horizontal'
      background-color='#393d49'
      text-color='#ffffff'
      active-text-color='#409EFF'
      @select='handleSelect'
    >
      <el-menu-item index='1'>首页</el-menu-item>
      <el-submenu index='2'>
        <template slot='title'>分类</template>
        <el-menu-item index='2-1'>选项1</el-menu-item>
        <el-menu-item index='2-2'>选项2</el-menu-item>
        <el-menu-item index='2-3'>选项3</el-menu-item>
        <el-submenu index='2-4'>
          <template slot='title'>选项4</template>
          <el-menu-item index='2-4-1'>选项1</el-menu-item>
          <el-menu-item index='2-4-2'>选项2</el-menu-item>
          <el-menu-item index='2-4-3'>选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index='3'>
        <a href='#/cartoon'>漫画</a>
      </el-menu-item>
      <el-menu-item index='4'>
        <a href='#/login'>个人介绍</a>
      </el-menu-item>
      <el-button class='btns'>登录</el-button>
    </el-menu>
    <!-- <div>
      <el-card class='box-card'>
        <div slot='header' class='clearfix'>
          <span>文章列表</span>
          <el-button style='float: right; padding: 3px 0' type='text'>更多</el-button>
        </div>
        <div v-for='item in items' :key='item' class='text item'>
          <el-card class='box-card-inner'>
              <h3>{{item.title}}</h3>
              <p>{{item.context}}</p>
              <br/>
            <el-tag
              v-for="tag in item.tags"
              :key='tag.label'
              :type='tag.type'
              effect='plain'
              size='mini'
            >{{ tag.label }}</el-tag>
          </el-card>
        </div>
      </el-card>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    //   items: [
    //     { title: '利用vue开发博客',
    //       context: '第一次开发全后端分离框架博客，摸索前进！！！',
    //       tags: [
    //         { type: '', label: this.showDate() },
    //         { type: 'success', label: '浏览次数' },
    //         { type: 'info', label: '标签三' },
    //         { type: 'danger', label: '标签四' },
    //         { type: 'warning', label: '标签五' }]
    //     },
    //     { title: '利用vue开发博客',
    //       context: '第一次开发全后端分离框架博客，摸索前进！！！',
    //       tags: [
    //         { type: '', label: this.showDate() },
    //         { type: 'success', label: '浏览次数' },
    //         { type: 'info', label: '标签三' },
    //         { type: 'danger', label: '标签四' },
    //         { type: 'warning', label: '标签五' }]
    //     },
    //     { title: '利用vue开发博客',
    //       context: '第一次开发全后端分离框架博客，摸索前进！！！',
    //       tags: [
    //         { type: '', label: '标签一' },
    //         { type: 'success', label: '标签二' },
    //         { type: 'info', label: '标签三' },
    //         { type: 'danger', label: '标签四' },
    //         { type: 'warning', label: '标签五' }]
    //     },
    //     { title: '利用vue开发博客',
    //       context: '第一次开发全后端分离框架博客，摸索前进！！！',
    //       tags: [
    //         { type: '', label: '标签一' },
    //         { type: 'success', label: '标签二' },
    //         { type: 'info', label: '标签三' },
    //         { type: 'danger', label: '标签四' },
    //         { type: 'warning', label: '标签五' }]
    //     }]
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      // console.log(key, keyPath)
    },
    showDate () {
      return Date()
    }
  }
}
</script>

<style lang='less' scoped>
.el-menu-demo {
  display: flex;
  justify-content: center;
}
.btns {
  position: absolute;
  margin: 10px;
  padding: 8px 10px;
  bottom: 0;
  right: 0%;
  top: -4px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 10%);
  width: 960px;
  height: 1080px;
}
</style>

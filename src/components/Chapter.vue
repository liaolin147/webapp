<template>
  <div class="chapter_container">
    <div>
      <el-row>
        <el-col :span="24">
          <div class="grid-headerWrapper bg-purple-dark">
            <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" background-color="#123456" @select="handleSelect">
              <el-menu-item index="1">处理中心</el-menu-item>
              <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
                <el-submenu index="2-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="2-4-1">选项1</el-menu-item>
                  <el-menu-item index="2-4-2">选项2</el-menu-item>
                  <el-menu-item index="2-4-3">选项3</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="3" disabled>消息中心</el-menu-item>
              <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="20"><div class="grid-content bg-purple">
          <div>
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="类别">
              <el-select v-model="formInline.cate" placeholder="类别" @visible-change="handleGetCate">
                <div class="block" v-for="item in totalCate" :key="item">
                  <el-option :label="item" :value="item"></el-option>
                </div>
              </el-select>
            </el-form-item>
            <el-form-item label="漫画名">
              <el-select v-model="formInline.name" placeholder="漫画名" @visible-change="handleGetName">
                <div class="block" v-for="item in totalName" :key="item">
                  <el-option :label="item.title" :value="item.id"></el-option>
                </div>
              </el-select>
            </el-form-item>
            <el-form-item label="章节段落">
              <el-select v-model="formInline.pageNumber" placeholder="章节段落" @visible-change="handleGetPageNumber">
                <div class="block" v-for="item in totalPageNumber" :key="item">
                  <el-option :label="item" :value="item"></el-option>
                </div>
              </el-select>
            </el-form-item>
            <el-form-item label="章节">
              <el-select v-model="formInline.page" placeholder="章节" @visible-change="handleGetPage">
                <div class="block" v-for="item in totalPage" :key="item">
                  <el-option :label="item" :value="item"></el-option>
                </div>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
                    <div class="block" v-for="item in imageUrl" :key="item">
            <el-image style="width: 80%" :src="item"></el-image>
          </div>
          </div>

          </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1',
      selectItems: null,
      items: null,
      imageUrl: null,
      totalCate: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      totalName: ['2010'],
      totalPageNumber: ['1', '2', '3'],
      totalPage: ['1', '2', '3', '4'],
      formInline: {
        cate: '1',
        CateNumber: '1',
        name: '2010',
        pageNumber: '1',
        page: '1'
      }
    }
  },

  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },

    getData (chapterId, pageId = 1) {
      this.$axios
        .get('http://192.168.2.128:5000/image/' + chapterId + '/' + pageId)
        .then(response => {
          this.items = response.data.result
          this.totalPageNumber = this.getAarry(this.items.totalPage)
          this.totalPage = this.items.list.map((item) => {
            item = item.sort
            return item
          })
        })
    },

    getAarry (number) {
      const arr = new Array(number)
      for (let i = 0; i < number; i++) {
        arr[i] = i
      }
      return arr
    },

    getSelectData (pageId) {
      this.$axios
        .get('http://192.168.2.128:5000/cartoon/' + pageId)
        .then(response => {
          this.selectItems = response.data.result.list
          this.totalName = this.selectItems.map((item) => {
            item = { 'title': item.title, 'id': item.id }
            return item
          })
        })
    },

    handleGetCate (event) {
      if (event) {
        this.getSelectData(this.formInline.cate)
      }
    },

    handleGetName (event) {
      if (event) {
        this.getData(this.formInline.name)
      }
    },

    handleGetPageNumber (event) {
      this.getData(this.formInline.name, this.formInline.pageNumber + 1)
    },

    handleGetPage (event) {
      if (event) {
        // this.imageUrl = this.items.imagelist.split(',').map(item => {
        //   item = 'http://xxmhimg.jsczg.cn' + item.slice(1)
        //   return item
        // })
      }
    },
    onSubmit (event) {
      // 范围[0-9] 需要对10取余操作
      this.imageUrl = this.items.list[(this.formInline.page - 1) % 10].imagelist.split(',').map((item) => {
        item = 'http://xxmh.96nong.cn' + item.slice(1)
        return item
      })
    }
  }
}
</script>

<style lang="less" scoped>
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
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    height: 1000px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>

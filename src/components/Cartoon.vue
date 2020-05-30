<template>
  <div class="login_container">
    <div class="block">
      <el-timeline v-for="item in items" :key="item">
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <h3>{{item.title}}</h3>
          <p>{{item.desc}}</p>
          <el-card class="box-card-inner">
            <el-tag type="warn" effect="plain" size="mini">{{ item.create_time }}</el-tag>
          </el-card>
        </el-timeline-item>
      </el-timeline>
      <div>
        <el-pagination @size-change="handleSizeChange" @current-change="handCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      items: this.getData(1)
    }
  },

  methods: {
    showDate () {
      return Date()
    },
    getData (pageId) {
      this.$axios
        .get('http://192.168.2.128:5000/app/' + pageId)
        .then(response => (this.items = response.data.result.list))
    },
    handleSizeChange (val) {
      console.log(`当前页: ${val}`)
    },
    handCurrentChange (val) {
      console.log(`当前页: ${this.currentPage}`)
      this.getData(val)
    }
  }
}
</script>

<style lang="less" scoped>
</style>

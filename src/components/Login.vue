<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avatar_box">
        <img src="../assets/logo.png" alt />
      </div>
              <div>
          <el-form class="login_form" :model="loginForm">
            <el-form-item>
              <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
            </el-form-item>
                        <el-form-item>
              <el-input v-model="loginForm.password" show-password prefix-icon="el-icon-lock"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                        <el-button type="primary">登录</el-button>
              <el-button type="info">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        username: '11',
        password: '22'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login_container {
  background-color: aquamarine;
  height: 100%;
  margin: 0;
  padding: 0;
}

.login_box {
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.avatar_box {
  width: 130px;
  height: 130px;
  border: 1px solid #eee;
  position: absolute;
  border-radius: 100px;
  box-shadow: 0 0 10px #ddd;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 10px;
}

img {
  width: 100%;
  height: 100%;
  border-radius: 100px;
  background-color: #eee;
}

.btns {
    display: flex;
    justify-content: flex-end;
}
.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
</style>

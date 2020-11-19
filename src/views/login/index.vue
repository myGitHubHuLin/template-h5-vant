<template>
  <div class="page">
    <van-row type="flex" justify="center">
      <van-image
        round
        width="30vw"
        height="30vw"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
        style="margin: 10px 0px"
      />
    </van-row>
    <van-cell-group>
      <van-field
        v-model="loginForm.username"
        required
        clearable
        label="用户名"
        right-icon="question-o"
        placeholder="请输入用户名"
        @click-right-icon="$toast('question')"
      />

      <van-field
        v-model="loginForm.password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
      />
    </van-cell-group>
    <van-cell-group>
      <van-field
        v-model="loginForm.sms"
        center
        clearable
        label="短信验证码"
        placeholder="请输入短信验证码"
      >
        <template #button>
          <van-button size="small" type="primary">发送验证码</van-button>
        </template>
      </van-field>
    </van-cell-group>
    <van-button
      color="linear-gradient(to right, #4bb0ff, #6149f6)"
      size="large"
      @click="handleLogin"
      :loading="loading"
      >登录</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "maybekakui",
        password: "123456",
      },
      loading: false,
    };
  },
  mounted() {
    console.log(this.$store.state);
  },
  methods: {
    async handleLogin() {
      try {
        this.loading = true;
        console.log(this.loginForm);
        await this.$store.dispatch("user/login", this.loginForm);
        await this.$store.dispatch("user/info");
        this.loading = false;
        this.$toast({
          message: "登录成功",
          position: "middle",
          duration: 1500,
          onClose: () => {
            this.$router.push("/home");
          },
        });
      } catch (error) {
        await this.$store.dispatch("user/logout");
        this.loading = false;
        this.$toast(error.message);
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 10px;
}
</style>

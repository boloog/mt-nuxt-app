<template>
  <div class="page-register">
    <div class="header-bg">
      <header class="w">
        <nuxt-link to="/" class="header  bgt"></nuxt-link>
        <div class="logo-title">欢迎注册</div>
        <div class="have-account">
          已有账号？
          <a href="./login">请登录&gt;</a>
        </div>
      </header>
    </div>

    <div class="container w">
      <div class="progress-bar">
        <Steps :current="0">
          <Step title="验证邮箱"></Step>
          <Step title="填写账号信息"></Step>
          <Step title="注册成功"></Step>
        </Steps>
        <div class="form-box">
          <Form
            ref="formCustom"
            :model="formCustom"
            :rules="ruleCustom"
            :label-width="80"
          >
            <FormItem label="邮箱" prop="email">
              <Row :gutter="20" type="flex">
                <Col span="12">
                  <Input type="text" v-model="formCustom.email"></Input>
                </Col>
                <Col span="10">
                  <Button @click="sendMsg">发送验证码</Button>
                  <span class="status">{{ statusMsg }} </span>
                </Col>
              </Row>
            </FormItem>
            <FormItem label="验证码" prop="code">
              <Input v-model="formCustom.code"></Input>
            </FormItem>
            <FormItem label="昵称" prop="name">
              <Input type="text" v-model="formCustom.name"></Input>
            </FormItem>
            <FormItem label="密码" prop="passwd">
              <Input type="password" v-model="formCustom.passwd"></Input>
            </FormItem>
            <FormItem label="确认密码" prop="passwdCheck">
              <Input type="password" v-model="formCustom.passwdCheck"></Input>
            </FormItem>

            <FormItem>
              <Button
                type="primary"
                @click="handleSubmit('formCustom')"
                size="large"
                >下一步</Button
              >
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CryptoJS from "crypto-js";

export default {
  layout: "blank", // 单独页面配置
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.formCustom.passwdCheck !== "") {
          // 对第二个密码框单独验证
          this.$refs.formCustom.validateField("passwdCheck");
        }
        callback();
      }
    };
    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.formCustom.passwd) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
      }
    };
    const code = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入验证码"));
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("验证码格式错误"));
        } else {
          callback();
        }
      }, 1000);
    };

    return {
      timerid: false,
      statusMsg: "",
      error: "",
      formCustom: {
        email: "",
        code: "",
        name: "",
        passwd: "",
        passwdCheck: ""
      },
      ruleCustom: {
        email: [
          {
            required: true,
            message: "请输入邮箱",
            trigger: "blur"
          }
        ],
        code: [{ required: true, validator: code, trigger: "blur" }],
        name: [
          {
            required: true,
            message: "请输入昵称",
            trigger: "blur"
          }
        ],
        passwd: [{ required: true, validator: validatePass, trigger: "blur" }],
        passwdCheck: [
          { required: true, validator: validatePassCheck, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
          this.$axios
            .post("/users/signkup", {
              username: window.encodeURIComponent(this.formCustom.name),
              password: CryptoJS.MD5(this.formCustom.passwd).toString(),
              email: this.formCustom.email,
              code: this.formCustom.code
            })
            .then(({ status, data }) => {
              if (status === 200) {
                if (data && data.code === 0) {
                  location.href = "/login";
                } else {
                  this.error = data.msg;
                  // this.$Message.success(data.msg);
                }
              } else {
                this.error = data.msg;
                // this.$Message.error(`服务器出错误${data.msg}`);
              }
              setTimeout(() => {
                this.error = "";
              }, 1500);
            });
        }
      });
    },
    sendMsg() {
      let namePass;
      let emailPass;
      if (this.timerid) {
        return false;
      }
      this.$refs["formCustom"].validateField("name", valid => {
        namePass = valid;
      });
      this.statusMsg = "";

      if (namePass) {
        return false;
      }

      this.$refs["formCustom"].validateField("email", valid => {
        emailPass = valid;
      });
      if (!namePass && !emailPass) {
        this.$axios
          .post("/users/verify", {
            username: encodeURIComponent(this.formCustom.name),
            email: this.formCustom.email
          })
          .then(({ status, data }) => {
            if (status === 200 && data && data.code === 0) {
              let count = 60;
              this.statusMsg = `${count--}秒后重新获取`;
              this.timerid = setInterval(() => {
                this.statusMsg = `${count--}秒后重新获取`;
                if (count === 0) {
                  clearInterval(this.timerid);
                  this.statusMsg = "";
                  //  this.timerid = null
                }
              }, 1000);
            } else {
              this.statusMsg = data.msg;
            }
          });
      }
    }
  }
};
</script>

<style lang="scss">
.page-register {
  .w {
    width: 1210px;
    margin: 0 auto;
  }

  .header-bg {
    height: 110px;
    background: url(https://misc.360buyimg.com/user/reg/3.0.0/css/i/headbg.jpg)
      repeat-x left bottom;
  }
  header {
    .header {
      width: 160px;
      height: 50px;
      float: left;
      margin-top: 24px;
    }
    .bgt {
      background: url(//misc.360buyimg.com/user/reg/3.0.0/css/i/icon.png)
        no-repeat;
    }
    .logo-title {
      float: left;
      height: 34px;
      line-height: 34px;
      font-size: 24px;
      color: #333;
      margin-top: 34px;
    }
    .have-account {
      font-size: 16px;
      float: right;
      margin-top: 55px;
      color: #999;
    }
  }
  .container {
    .progress-bar {
      width: 600px;
      margin: 100px auto;
      .ivu-steps-item:last-child {
        width: 32% !important;
      }
      .form-box {
        // width: 500px;
        margin: 50px auto;
        .ivu-form-item-content {
          width: 400px !important;
        }
      }
    }
  }
}
</style>

// 数据库配置文件
export default {
  dbs: "mongodb://127.0.0.1:27017/dbs",
  redis: {
    get host() {
      return "127.0.0.1";
    },
    get port() {
      return 6379;
    }
  },
  smtp: {
    get host() {
      return "smtp.qq.com";
    },
    get user() {
      return "373840427@qq.com";
    },
    get pass() {
      return "wfjktcaifxswbgge"; // 温馨提示：登录第三方客户端时，密码框请输入“授权码”进行验证。生成授权码
    },
    get code() {
      // 返回验证码
      return () => {
        return Math.random()
          .toString(16)
          .slice(2, 6)
          .toUpperCase();
      };
    },
    get expire() {
      // 验证码时长
      return () => {
        return new Date().getTime() + 60 * 60 * 1000;
      };
    }
  }
};

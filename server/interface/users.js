// 用户中心
import Router from "koa-router";
import Redis from "koa-redis";

// 开启STMP服务
import nodeMailer from "nodemailer";
// 导入用户模型
import User from "../dbs/models/users";
// 验证
import Passport from "./utils/passport";
// 邮箱配置文件
import Email from "../dbs/config";
// 封装的axios
import axios from "./utils/axios";

let router = new Router({
  prefix: "/users"
});

let Store = new Redis().client;

router.post("/signup", async ctx => {
  const { username, password, email, code } = ctx.request.body;

  if (code) {
    // 在 redis 里获取 code
    const saveCode = await Store.hget(`nodemail:${username}`, "code");
    const saveExpire = await Store.hget(`nodemail:${username}`, "expire"); // 1分钟有效
    if (code === saveCode) {
      // 验证码过期
      if (new Date().getTime() - saveExpire > 0) {
        ctx.body = {
          code: -1,
          msg: "验证码已过期，请重新尝试"
        };
        return false;
      } else {
        ctx.body = {
          code: -1,
          mas: "请填写正确的验证码"
        };
      }
    } else {
      ctx.body = {
        code: -1,
        mas: "请填写验证码"
      };
    }

    let user = await User.find({
      username
    });
    if (user.length) {
      ctx.body = {
        code: -1,
        msg: "帐号已被注册"
      };
      return;
    }
    let nuser = await User.create({
      username,
      password,
      email
    });
    if (nuser) {
      let res = await axios.post("/users/signin", {
        username,
        password
      });
      if (res.data && res.data.code === 0) {
        ctx.body = {
          code: 0,
          msg: "注册成功",
          user: res.data.user
        };
      } else {
        ctx.body = {
          code: -1,
          msg: "error"
        };
      }
    } else {
      ctx.body = {
        code: -1,
        msg: "注册失败"
      };
    }
  }
});

// 登录
router.post("/signin", async ctx => {
  return Passport.authenticate("local", (err, user, info, status) => {
    if (err) {
      ctx.body = {
        code: -1,
        msg: err
      };
    } else {
      if (user) {
        ctx.body = {
          code: 0,
          msg: "登录成功",
          user
        };
        return ctx.login(user);
      } else {
        ctx.body = {
          code: 1,
          msg: info
        };
      }
    }
  })(ctx, next);
});

// 验证
router.post("/verify", async ctx => {
  let username = ctx.request.body.username;
  const saveExpire = await Store.hget(`nodemail:${username}`, "expire"); // 1分钟有效
  if (saveExpire && new Date().getTime() - saveExpire < 0) {
    ctx.body = {
      code: -1,
      msg: "验证请求过于频繁，1分钟内1次"
    };
    return false;
  }
  let transporter = nodeMailer.createTransport({
    host: Email.smtp.host,
    post: 587, // 端口号465或587
    secure: false,
    auth: {
      user: Email.smtp.user,
      poss: Email.smtp.pass
    }
  });
  let ko = {
    code: Email.smtp.code(),
    expire: Email.smtp.expire(),
    email: ctx.request.body.email,
    user: ctx.request.body.username
  };
  let mailOptions = {
    from: `"认证邮件" <${Email.smtp.user}>`,
    to: ko.email,
    subject: "STMP邮件注册码",
    html: `您在MT注册的邀请码是${ko.coe}`
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("发送 ERROR");
    } else {
      Store.hmset(
        `nodemail:${ko.user}`,
        "code",
        ko.code,
        "expire",
        ko.expire,
        "email",
        ko.email
      );
    }
  });

  ctx.body = {
    code: 0,
    msg: "验证码已发送"
  };
});

router.get("/exit", async (ctx, next) => {
  await ctx.logout();
  // 是否为登录状态
  if (!ctx.isAuthenticated()) {
    ctx.body = {
      code: 0
    };
  } else {
    ctx.body = {
      code: -1
    };
  }
});

router.get("/getUser", async (ctx, next) => {
  // 是否为登录状态
  if (ctx.isAuthenticated()) {
    const { username, email } = ctx.session.passport.user;
    ctx.body = {
      user: username,
      email
    };
  } else {
    ctx.body = {
      user: "",
      email: ""
    };
  }
});

export default router;

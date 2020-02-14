// 用户中心
import Rouer from "koa-router";
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

# horn-search

技术栈：[mpx](https://mpxjs.cn/) + [微信小程序开发文档](https://developers.weixin.qq.com/miniprogram/dev/framework/) + [微信云开发](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

## 项目开始

```sh
npm i
# development
npm start

# production
npm run build
```

## 云函数部分

### 上线步骤

1. 购买云函数的数据库
2. 新建云函数
3. 上线云函数（免部署）
4. 订阅消息模板申请
5. 微信支付能力申请和开通
6. 地理位置简历索引，不然请求数据库会报错

`src/functions`

## UI视图部分

`src/miniprogram`

### 组件库

[vant-wabapp](https://vant-contrib.gitee.io/vant-weapp/#/home)

### 需要开通的权限

1. 地图api的方法
2. 腾讯地图的sdk

### 配置[重要]
`src/miniprogram/constant/pageConfig.js`文件中的配置全部都需要替换到对应的服务上有的资源或者配置

### 上线步骤

1. 上传代码
2. 提交体验版本
3. 提交审核
4. 确定上线

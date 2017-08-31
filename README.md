# react-cli-app
    react-cli-app是基于官方create-react-app开发的一个脚手架。
    <br>
### 模板特性
    create-react-app把webpack配置文件以及服务文件默认隐藏起来,这使得我们不能自由的配置webpack。好在官方提供了yarn eject命令可以是webpack配置文件暴露出来。react-cli-app就是eject之后的模板。开发者可以自由的配置你的webpack。
    <br> 
### 技术支持
  `react-router`
    <br>
  `redux`
    <br>
    create-react-app并没有集成react-router、redux等功能，以至于我们开发者在创建react实例之后还需要配置router和redux。
    <br>
  这里react-cli-app集成了router、redux，开发者可以省去配置全家桶的麻烦。
### 运行
    `yarn start/npm start`
    <br>
    进入开发模式
    <br>
    `yarn test/npm test`
    <br>
    进入测试模式
    <br>
    `yarn build/npm build`
    <br>
    编辑打包文件

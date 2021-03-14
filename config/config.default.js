/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1582529097199_2541';

  // add your middleware config here
  config.middleware = [
    
  ];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    // database configuration
    client: {
      // host
      host: 'localhost',
      // port
      port: '3306',
      // username
      user: 'admin',
      // password
      password: 'youareonyouown',
      // database
      database: 'react_blog',
    },
    // load into app, default is open
    app: true,
    // load into agent, default is close
    agent: false,
  };
  config.security = {
    csrf: {enable: false},
    domainWhiteList: ['*']
    // domainWhiteList: ['http://localhost:3000','http://localhost:4000','http://jsv5.tk:3000','http://jsv5.tk:4000']
  };
  config.cors = {
    credentials: true,  
    // origin: 'http://localhost:3000',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };
  config.session = {
    key: 'EGG_SESS',  // 设置session cookie里面的key
    maxAge: 24 * 3600 * 1000, // 设置过期时间
    httpOnly: true,
    encrypt: true,
    renew: true         // renew等于true 那么每次刷新页面的时候 session都会被延期
  }

  return {
    ...config,
    ...userConfig,
  };
};

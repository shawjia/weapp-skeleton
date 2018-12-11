// https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/page.html

import regeneratorRuntime from 'regenerator-runtime';

const app = getApp();

Page({

  async onShow() {
    console.log('ohShow', app.globalData);

    console.log('async...');

    console.log(await this.later());

    console.log('bye');
  },

  later() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('async finished: here I am');
      }, 1000);
    });
  },

  data: {
  },

});

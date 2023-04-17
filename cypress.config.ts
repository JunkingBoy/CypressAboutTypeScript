/**
 * @Author: Lucifer
 * @Date: 4/15/2023, 12:23:31 AM
 * @LastEditors: Lucifer
 * @LastEditTime: 4/15/2023, 12:23:31 AM
 * Description: A config ts about cypress
 * Copyright: Copyright (©)}) 2023 Your Name. All rights reserved.
 */
import cypress, { defineConfig } from "cypress";
import { env } from "./cypress/config/cypress.qa.json";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // // 删除没有规范录制的视频
      // on('after:spec', (spec, result) => {
      //   if(result && result.video) {
      //     const failures = _.some(result.tests, (test) => {
      //       return _.some(test.attempts, { state: "failed" })
      //     })
      //     if(!failures){
      //       return del(result.video);
      //     }
      //   }
      // })
    },
    // "baseUrl":"",
    // 测试失败重试次数
    retries: {
      "runMode": 3, // 重试cpyress run
      "openMode": 0 // 重试cypress open
    },
    "viewportHeight": 1080,
    "viewportWidth": 1920,
    "numTestsKeptInMemory": 30,
    "defaultCommandTimeout": 5000, // 命令默认超时的事件
    "taskTimeout": 50000,
    "pageLoadTimeout": 30000, // 等待页面加载或cy.visit(), cy.go(), cy.reload()命令触发其页面加载事件的超时时间
    "requestTimeout": 3000, // 等待cy.wait()命令中的xhr请求发出的超时时间
    "responseTimeout": 10000, // 一些命令超时的时间(cy.request(), cy.wait(), cy.getCookie(), cy.screenshots()等)
    "videosFolder": "cypress/videos",
    "screenshotsFolder": "cypress/screenshots"
  },
});

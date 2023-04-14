/**
 * @Author: Lucifer
 * @Date: 4/15/2023, 12:22:52 AM
 * @LastEditors: Lucifer
 * @LastEditTime: 4/15/2023, 12:22:52 AM
 * Description: A test case about Cypress frame
 * Copyright: Copyright (©)}) 2023 Your Name. All rights reserved.
 */
import cypress = require("cypress");

describe('TestLogin', () => {
    beforeEach('After All', () => {
        cy.visit('https://console-pre.raylink.live/login');
    });

    it.skip('Login by username and password', () => {
        var username = '18878912237';
        var password = 'Jw123456';

        cy.get('ul>li:nth-child(2)')
        .click();
        cy.get('input[id=name]')
        .type(username);
        cy.get('input[id=password]')
        .type(password);
        cy.get('input[id=agree]')
        .click();
        // cy.pause(); // 设置以后要到浏览器手动的执行下一步操作
        cy.get('button[type=submit]')
        .as('submitBtn');
        cy.get('@submitBtn')
        .debug() // 可以继续运行和跳到下一个函数，在浏览器上方有具体的图标
        .click();
        
        // check
        cy.url().should('include', '/profile');
    });

    it('Login Test', () => {
        var username = '18878912237';
        var password = 'Jw123456';

        cy.get('ul>li')
        .should('have.length', 2)
        .and(($li) => {
            // 多重断言
            expect($li.get(0).textContent, '验证码登录')
        })
    });
})
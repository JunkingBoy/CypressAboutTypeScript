/**
 * @Author: Lucifer
 * @Date: 4/15/2023, 12:22:52 AM
 * @LastEditors: Lucifer
 * @LastEditTime: 4/15/2023, 12:22:52 AM
 * Description: A test case about Cypress frame
 * Copyright: Copyright (©)}) 2023 Your Name. All rights reserved.
 */
import { should } from "chai";
import cypress = require("cypress");

describe('TestLogin', () => {
    beforeEach('After All', () => {
        cy.visit('');
    });

    it.skip('Login by username and password', () => {
        var username = '';
        var password = '';

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
        var username = '';
        var password = '';

        cy.get('ul>li')
        .should('have.length', 2)
        .and(($li) => {
            // 多重断言
            expect($li.get(0).textContent, '验证码登录');
            expect($li.get(1).textContent, "密码登录");
        });

        cy.get('ul>li:nth-child(2)')
        .as('username_password_Btn');
        cy.get('@username_password_Btn')
        .click();

        cy.get('input[id=agree]')
        .click();
        cy.get('input[id=name]')
        .type(username);
        cy.get('input[id=password]')
        .type(password);

        cy.get('button[type=submit]')
        .should('have.class', 'button__StyledButton-sc-1xvpoi0-0')
        .should('have.class', 'DNJh atom__SumbitButton-sc-1f08aeq-3')
        .should('have.class', 'jdbddl')
        .as('submit_Btn');
        cy.get('@submit_Btn')
        .click();
    });

    // it('Elements tets', () => {
    //     before(function() {

    //     });

    //     // describe('#indexOf()', function() {
    //     //     context('Can not find', function() {
    //     //         it('Do not throw', function() {
    //     //             (function( ) {[1, 2, 3].indexOf(4);}.should.not.throw( ))
    //     //         })
    //     //     })
    //     // })
    // });

    afterEach(() => {
        console.log('Test successfully!!!');
    });
})
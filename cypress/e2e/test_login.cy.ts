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
import { testLoginUser } from '../data/test_login_data';

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

    it.skip('Login Test', () => {
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

    it.skip('Test controller elements', () => {
        const username = '';
        const password = '';

        cy.get('ul>li:nth-child(2)')
        .as('change_Btn');
        cy.get('@change_Btn')
        .click();

        cy.get('input[id=agree]')
        .click();
        cy.get('input[name]')
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

        // after login
        cy.get('a')
    });

    /**
     * 这样就实现了多种场景的覆盖,例如:
     * 1. 正确账号,正确密码,测试通过
     * 2. 正确账号,错误密码,测试失败
     */
    context.skip('Many login cases', () => {
        for(const user of testLoginUser) {
            it(user.summary, function() {
                // cy.get('ul>li:nth-child(2)')
                // .as('change_Btn');
                // cy.get('@change_Btn')
                // .click();
                cy.contains('li', '密码登录')
                .click();

                cy.get('#agree')
                .click();

                // 检查元素处于被选中状态
                cy.get('#agree')
                .should('be.checked');

                cy.get('#name')
                .type(user.username);
                cy.get('#password')
                .type(user.password);

                cy.get('button[type=submit]')
                .should('have.class', 'button__StyledButton-sc-1xvpoi0-0')
                .should('have.class', 'DNJh atom__SumbitButton-sc-1f08aeq-3')
                .should('have.class', 'jdbddl')
                .as('submit_Btn');
                cy.get('@submit_Btn')
                .click();
            });
        }
    });

    /**
     * <ul>
            <li id="id">1</li>
            <li>2</li>
            <li>3</li>
        </ul>
     */

    it.skip('A Test About find', () => {
        cy.get('ul')
        .find('#id')
        .click();
    });

    it('Test Function About Children', () => {
        cy.get('ul')
        .children()
        .as('Ui');
        cy.log('#Ui');
        cy.get('li')
        .parents()
        .as('Li');
        cy.log('#Li');

        // cy.contains('li', '密码登录')
        // .click({ force: true });

        // cy.contains('li', '密码登录')
        // .click({ multiple: true });

        cy.get('ul>li:nth-child(2)')
        .click('top');

        cy.contains('li', '密码登录')
        .click('topRight');

        cy.contains('li', '密码登录')
        .click('topLeft');

        cy.contains('li', '密码登录')
        .click('left');

        cy.contains('li', '密码登录')
        .click('right');

        cy.contains('li', '密码登录')
        .click('center'); // 单击li元素中心位置处

        cy.contains('li', '密码登录')
        .click('bottom'); // 单机li元素正下方

        cy.contains('li', '密码登录')
        .click('bottomLeft');

        cy.contains('li', '密码登录')
        .click('bottomRight');

        cy.get('ul')
        .type('{ shift }', { release: false });
        cy.get('li:first')
        .click(); // 按住shift加左键,还支持alt和ctrl--->{alt}、{ctrl}

        // cy.get('#ul')
        // .each(($li) => {
        //     cy.log($li.text());
        // })
        // cy.get('#ul')
        // .eq(0);
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
describe('Тестируем форму логина', function() {

    it('Позитивный тест на верный логин и пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon');
    cy.get('#exitMessageButton > .exitIcon').click();
    cy.contains('Форма логина');
})

it('Проверка логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('rafkat.khananov@mail.ru');
    cy.get('#restoreEmailButton');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');
    cy.get('#exitMessageButton > .exitIcon');
    cy.get('#exitMessageButton > .exitIcon').click;
})

it('Проверка на негативный кейс авторизации', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio2');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon');
    cy.get('#exitMessageButton > .exitIcon').click();

})

it('Проверка на негативный кейс авторизации', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('german@dolnigov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon');
    cy.get('#exitMessageButton > .exitIcon').click();

})

it('Проверка на негативный кейс валидации', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germandolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');
    cy.get('#exitMessageButton > .exitIcon');
    cy.get('#exitMessageButton > .exitIcon').click();

})

it('Проверка на приведение к строчным буквам в логине', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon');
    cy.get('#exitMessageButton > .exitIcon').click();

})
})
describe('Тестируем магазин мебели', function() {

    it('Позитивный тест на заказ мебели', function () {
    cy.visit('https://testqastudio.me/');
    cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg > [x1="6"]').click();
    cy.get('.header-left-items > .site-branding > .logo > .logo-dark').click();
    cy.get('.post-11337 > .product-inner > .product-summary > .woocommerce-loop-product__title > .woocommerce-LoopProduct-link').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click({force: true});
    cy.get('.checkout-button').click();
    cy.get('#billing_first_name').type('Рафкат');
    cy.get('#billing_last_name').type('Хананов');
    cy.get('#billing_address_1').type('Ворошилова 9А');
    cy.get('#billing_city').type('Саранск');
    cy.get('#billing_state').type('Республика Мордовия');
    cy.get('#billing_postcode').type('420102');
    cy.get('#billing_phone').type('+79048057017');
    cy.get('#billing_email').type('rafkat.khananov@mail.ru');
    cy.get('#place_order').click();
})

})
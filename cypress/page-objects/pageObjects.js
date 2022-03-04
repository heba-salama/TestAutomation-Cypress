/// <reference types="cypress" />

export class WebPage {

    navigate(url) {
        cy.visit(url)
    }

    login(username, password) {
        cy.get('#email').type(username, { force: true })
        cy.get('#password').type(password, { force: true })
        cy.get('.sc-hKwDye').click({ force: true })
    }


    addObject() {
        cy.get('[data-testid=add-employee-menu]', { timeout: 6000 }).click()
        cy.contains('CREATE NEW').click()
        cy.get('.css-7406fh')
        cy.get('.css-tlfecz-indicatorContainer', { timeout: 5000 }).click({ timeout: 2000 }).type('Egypt{enter}')
        cy.scrollTo('bottom')
        cy.get('#cy.scrollTo(0, 500)').click()
    }

}
/// <reference types="cypress" />

import { WebPage } from '../page-objects/pageObjects';


describe('login and create new object with steps - Test Suite', () => {

    const webPage = new WebPage()

    before('Execute before all tests', () => {

        cy.readFile('./cypress/fixtures/example.json').should('exist') // true
    })


    it('should navigate to the website URL', () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })

        cy.fixture('example').then((profile) => {
            webPage.navigate(profile.url)
            webPage.login(profile.username, profile.password)
            webPage.addObject()

        })

    })
})
// https://on.cypress.io/api

describe('My First Test', () => {
  beforeEach(() => { // permet d'exécuter une action en ammont
        cy.visit('/')
    })

  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
  })

  it('Vérifier si il y a 5 items dans la page', () => {
        cy.get('.item').should('have.length', 5)

        cy.get('.item .details h3').first().should('have.text', 'Documentation')

        cy.get('.item .details h3').last().should('have.text', 'Support Vue')
    })
})

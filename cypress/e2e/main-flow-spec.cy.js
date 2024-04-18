describe('LATSTLATP', () => {
  it('navigates to game page and validates all elements', () => {
    cy.fixture('snakes.json').then(snakes => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/snakes/', {
        status: 201,
        body: snakes
      })
    })

    cy.fixture('zones.json').then(zones => {
      cy.intercept('GET', 'http://localhost:3000/api/v1/noSnakeZones/', {
        status: 200,
        body: zones
      })
    })

    cy.visit('http://localhost:3001/')
  })
})
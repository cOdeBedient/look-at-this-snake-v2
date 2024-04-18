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
      .get('.landing').contains('h1', "Look at this Snake then Look at this Puppy")
      .get('.landing').contains('h2', "A phobic deprogramming tool designed by someone with no credentials")
      .get('.level-form').contains('label', 'Level 1 |')
      .get('.level-form').contains('label', 'Level 2 |')
      .get('.level-form').contains('label', 'Level 3 |')
      .get('.level-form').contains('label', 'Level 4 |')
      .get('a').contains("p", "breathe. . . then click this button to begin")



  })
})